(function ($) {

  "use strict";

  var currentYear = new Date().getFullYear();
  var locale;
  var colorGenerator;

  /**
   * Constructor
   * @constructor
   */
  $.StudyDtoParser = function (localSetting) {
    locale = localSetting ? localSetting : 'en';
    colorGenerator = new $.ColorGenerator();
  };

  /**
   * Class method definition
   * @type {{create: create}}
   */
  $.StudyDtoParser.prototype = {

    colorGenerator: function(generator) {
      if (generator) {
        colorGenerator = generator;
      }

      return this;
    },

    parse: function (studyDto) {
      if (studyDto.populations) {
        ensureStartEndDates(studyDto.populations);
        return parseStudy(studyDto, findBounds(studyDto.populations));
      }

      return null;
    }
  };

  /**
   * The input date must be ISO 8601 (yyyy-MM-dd)
   * @param date
   * @returns {Date}
   */
  function makeDateFromString(date) {
    const parts = date.split(/-/).map(function(t)  {
      return parseInt(t);
    });

    return makeDate(parts[0], parts[1]-1, parts[2]);
  }

  function makeDate(year, month, day) {
    return new Date(year, month, day);
  }

  function makeStartDate(year, month) {
    return makeDate(year, (month || 1) - 1, 1);
  }

  function makeEndDate(year, month) {
    var m = (month || 12) - 1;
    var d = new Date(year, m+1, 0).getDate();
    return makeDate(year, m, d);
  }

  function ensureDceWeightOrder(events) {
    (events || []).sort(function(a, b) {
      return  a.weight - b.weight;
    });
  }

  /**
   * Ensurre all dates are normalized; no need to for start/end year/month
   * @param populations
   */
  function ensureStartEndDates(populations) {
    $.each(populations, function (i, population) {
      if (population.hasOwnProperty('dataCollectionEvents')) {
        ensureDceWeightOrder(population.dataCollectionEvents);

        $.each(population.dataCollectionEvents, function (j, dce) {
          dce.startDate = dce.startDay ? makeDateFromString(dce.startDay) : makeStartDate(dce.startYear, dce.startMonth);

          var endYear = dce.endYear;
          dce.ongoing = !endYear;

          if (!endYear) {
            endYear = currentYear > dce.startYear ? currentYear : dce.startYear;
          }
          dce.endDate = dce.endDay ? makeDateFromString(dce.endDay) : makeEndDate(endYear, dce.endMonth);
        });
      }
    });
  }

  /**
   * Returns the date bounds of all population, startYear and maxYear (in months)
   * @param populations
   * @returns {{min: number, max: number, start: Number}}
   */
  function findBounds(populations) {
    var startYear = Number.MAX_VALUE;
    var endYear = Number.MIN_VALUE;

    $.each(populations, function (i, population) {
      if (population.hasOwnProperty('dataCollectionEvents')) {
        $.each(population.dataCollectionEvents, function (j, dce) {
          startYear = Math.min(startYear, dce.startDate.getFullYear());
          var dceEndYear = dce.endDate.getFullYear();
          if (endYear < dceEndYear) {
            endYear = dceEndYear;
          }
        });
      }
    });
    return {
      min: makeStartDate(startYear),
      max: makeStartDate(endYear+1)
    };
  }

  /**
   * Converts a StudyDto to timeline compatible data format
   * @param studyDto
   * @param bounds
   */
  function parseStudy(studyDto, bounds) {
    var populations = parsePopulations(studyDto, bounds);
    if (populations.length === 0) return null;
    var timelineData = {start: bounds.start, min: bounds.min, max: bounds.max, data: populations};
    return timelineData;
  }

  /**
   * Given a Study Dto, extracts the required fields and formats the data required for timeline rendering
   * @param studyDto
   * @param bounds
   */
  function parsePopulations(studyDto, bounds) {
    if (studyDto === null || !studyDto.hasOwnProperty('populations')) return;

    var populations = [];
    var populationData;
    $.each(studyDto.populations, parsePopulationsInternal(populations));

    return populations;

    /**
     * Defined merely to pass extra arguments to the $.each iterator closure
     * @param populations
     * @returns {Function}
     */
    function parsePopulationsInternal(populations) {
      return function (i, populationDto) {
        var lines = [];
        populationData = {};
        setId(populationData, populationDto, 'id');
        setTitle(populationData, populationDto, 'name');
        populationData.color = colorGenerator.nextColor();
        if (populationDto.hasOwnProperty('dataCollectionEvents') && populationDto.dataCollectionEvents.length > 0) {
          parseEvents(lines, populationData, populationDto.dataCollectionEvents, bounds);
          // use a loop instead of array.concat() in order to add lines to the same populations variable (same instance)
          $.each(lines, function (i, line) {
            populations.push(line);
          });
        }
      };
    }

    /**
     * Sets the 'id' field if present
     * @param obj
     * @param dto
     * @param field
     */
    function setId(obj, dto, field) {
      if (dto.hasOwnProperty(field)) obj[field] = dto[field];
    }

    /**
     * Translate fields
     * @param field
     */

    function translateField(field) {
      var localField = field[0].value;
      $.each(field, function (i, fieldLang) {
        if (fieldLang.lang == locale) localField = fieldLang.value;
      });
      return localField;
    }

    /**
     * Sets the title field if present and only for the first local
     * @param obj
     * @param dto
     * @param field
     */
    function setTitle(obj, dto, field) {
      if (dto.hasOwnProperty(field)) obj.title = translateField(dto[field]);
    }

    /**
     * Set the data collection events of a given population
     * @param lines
     * @param populationData
     * @param dto
     * @param bounds
     */
    function parseEvents(lines, populationData, dto, bounds) {
      if (jQuery.isEmptyObject(dto)) return;
      var dceClone = jQuery.extend(true, {}, dto);

      $.each(dceClone, function (i, dceDto) {
        if (i === "0") {
          lines.push(createPopulationItem(populationData, dceDto, bounds));
        } else {
          var lastItems = lines[lines.length - 1].events;
          var startingTime = dceDto.startDate;
          var endingTime = dceDto.endDate;
          var overlapped = false;
          var lastItem = null;

          for (var last = lastItems.length - 1; last >= 0 && !overlapped; last--) {
            lastItem = lastItems[last];

            if (overlap(startingTime, endingTime, lastItem.starting_time, lastItem.ending_time)) {
              lines.push(createPopulationItem(populationData, dceDto, bounds));
              overlapped = true;
            }
          }

          if (!overlapped) {
            lastItems.push(createEventItem(dceDto, bounds, lastItem.groupId));
          }
        }
      });

      /**
       * Determines if two dates overlap
       * @param s1
       * @param e1
       * @param s2
       * @param e2
       * @returns {boolean}
       */
      function overlap(s1, e1, s2, e2) {
        return Math.min(e1, e2) - Math.max(s2, s1) > 0;
      }

      /**
       * Create a population item
       * @param populationData
       * @param dceDto
       * @param bounds
       * @returns {{population: *}}
       */
      function createPopulationItem(populationData, dceDto, bounds) {
        var cloneObject = jQuery.extend({}, populationData);
        cloneObject.events = [createEventItem(dceDto, bounds)];
        return cloneObject;
      }

      /**
       * Creates an Data Collection Event item
       * @param dceDto
       * @param bounds
       * @returns {{}}
       */
      function createEventItem(dceDto, bounds) {
        var dce = {};
        setId(dce, dceDto, 'id');
        setTitle(dce, dceDto, 'name');
        setStartingTime(dce, dceDto, bounds);
        setEndingTime(dce, dceDto, bounds);
        setOnGoing(dce, dceDto);
        return dce;
      }

      /**
       * Sets the starting time of an event in months
       * @param dce
       * @param dceDto
       * @param bounds
       */
      function setStartingTime(dce, dceDto, bounds) {
        dce.starting_time = dceDto.startDate;
      }

      /**
       * Sets the ending time of an event in months
       * @param dce
       * @param dceDto
       * @param bounds
       */
      function setEndingTime(dce, dceDto, bounds) {
        dce.ending_time = dceDto.endDate;
      }

      /**
       * Sets the ending time of an event in months
       * @param dce
       * @param studyDto
       * @param bounds
       */
      function setOnGoing(dce, studyDto) {
        dce.ongoing = studyDto.ongoing;
        dce.ending_time = studyDto.endDate;
      }

    }
  }

}(jQuery));
