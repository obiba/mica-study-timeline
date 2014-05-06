(function ($) {

  "use strict";

  var defaultPalette = [
    '#9a3034', // Dark red
    '#886e6a', // Brownish-violet
    '#dc9351', // Tan
    '#0078ad', // Dark blue
    '#8db173', // Light green
    '#bca68e', // Light grey
    '#707175', // Dark grey
    '#ff7901', // Orange
    '#88697b', // Violet
    '#99c1c3'  // Light blue
  ];

  $.ColorGenerator = function () {
  };


  $.ColorGenerator.prototype = {
    create: function (palette) {
      this.colorPalette = jQuery.isEmptyObject(palette) ? defaultPalette : palette;
      this.index = 0;
    },

    nextColor: function() {
      shadeColor(colorPalette[index], Math.round());
      index = (index + 1) % colorPalette.length;
    }
  };

  function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }


}(jQuery));

(function ($) {

  "use strict";

  var colorGenerator = new $.ColorGenerator().create();

  $.MicaTimeline = function () {
  };

  /**
   * Constructor
   * @type {{create: create}}
   */
  $.MicaTimeline.prototype = {

    create: function (selectee, studyDto) {
      var bounds = findBounds(studyDto.populations);
      var timelineData = studyDtoToTimelineData(studyDto, bounds);
      if (timelineData === null) return;
      console.log(JSON.stringify(timelineData));

      var width = $(selectee).width();
      var chart = d3.timeline()
        .startYear(timelineData.start)
        .beginning(timelineData.min)
        .ending(timelineData.max)
        .width(width)
        .stack()
        .tickFormat({
          format: d3.format("d"),
          tickTime: 1,
          tickNumber: 1,
          tickSize: 10
        })
        .margin({left: 15, right: 15, top: 0, bottom: 20})
        .rotateTicks(timelineData.max > this.maxMonths ? 45 : 0)
        .click(function (d, i, datum) {
          $('#event-' + d.id).modal();
        });

      d3.select(selectee).append("svg").attr("width", width).datum(timelineData.data).call(chart);
    }

  };

  /**
   * Returns the date bounds of all population, startYear and maxYear (in months)
   * @param populations
   * @returns {{min: number, max: number, start: Number}}
   */
  function findBounds(populations) {
    var startYear = Number.MAX_VALUE;
    var maxYear = Number.MIN_VALUE;
    $.each(populations, function (i, population) {
      if (population.hasOwnProperty('dataCollectionEvents')) {
        $.each(population.dataCollectionEvents, function (j, dce) {
          console.log(dce.startYear, dce.endYear);
          startYear = Math.min(startYear, dce.startYear);
          maxYear = Math.max(maxYear, convertToMonths(dce.endYear - startYear, dce.hasOwnProperty('endMonth') ? dce.endMonth : 12));
        });
      }
    });

    return {min: 0, max: Math.ceil(maxYear / 12) * 12, start: startYear};
  }

  /**
   * Converts to months
   * @param year
   * @param month
   * @returns {number}
   */
  function convertToMonths(year, month) {
    return 12 * parseInt(year, 10) + parseInt(month, 10);
  }


  /**
   * Converts a StudyDto to timeline compatible data format
   * @param studyDto
   */
  function studyDtoToTimelineData(studyDto, bounds) {
    var populations = getPopulationsData(studyDto, bounds);
    if (populations.length === 0) return null;
    var timelineData = {start: bounds.start, min: 0, max: bounds.max, data: populations};
    return timelineData;
  }

  /**
   * Given a Study Dto, extracts the required fields and formats the data required for timeline rendering
   * @param studyDto
   */
  function getPopulationsData(studyDto, bounds) {
    if (studyDto === null || !studyDto.hasOwnProperty('populations')) return;

    var populations = [];
    var populationData;
    $.each(studyDto.populations, function (i, populationDto, colors) {
      populationData = {};
      setId(populationData, populationDto, 'id');
      setTitle(populationData, populationDto, 'name');
      populationData.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//      populationData.color = colorGenerator.nextColor();
      if (populationDto.hasOwnProperty('dataCollectionEvents') && populationDto.dataCollectionEvents.length > 0) {
        setEvents(populations, populationData, populationDto.dataCollectionEvents, bounds);
      }
    });

    return populations;


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
     * Sets the title field if present and only for the first local
     * @param obj
     * @param dto
     * @param field
     */
    function setTitle(obj, dto, field) {
      if (dto.hasOwnProperty(field)) obj.title = dto[field][0].value;
    }

    /**
     * Set the data collection events of a given population
     * @param populationData
     * @param dto
     */
    function setEvents(lines, populationData, dto, bounds) {
      if (jQuery.isEmptyObject(dto)) return;

      lines.push(createPopulationItem(populationData, dto[0], bounds));

      $.each(dto, function (i, dceDto) {
        if (i === 0) return true; // first line is altreay populated
        var addLine = true;
        $.each(lines, function (j, line) {
          var last = line.population.events[line.population.events.length-1];
          var startingTime = getStartingTime(dceDto, bounds);
          var endingTime = getEndingTime(dceDto, bounds);
          if (!overlap(startingTime, endingTime, last.starting_time, last.ending_time)) {
            line.population.events.push(createEventItem(dceDto, bounds));
            addLine = false;
            return false;
          }
        });
        if (addLine) {
          lines.push(createPopulationItem(populationData, dceDto, bounds));
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
        return {population: cloneObject};
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
        return dce;
      }

      /**
       * Given a DCE returns the starting time in months
       * @param dceDto
       * @param bounds
       * @returns {number}
       */
      function getStartingTime(dceDto, bounds) {
        var start = dceDto.hasOwnProperty('startYear') ? dceDto.startYear : 0;
        var end = dceDto.hasOwnProperty('startMonth') ? dceDto.startMonth - 1 : 0;
        return convertToMonths(start - bounds.start, start > 0 ? end : 0);
      }

      /**
       * Sets the starting time of an event in months
       * @param dce
       * @param dceDto
       */
      function setStartingTime(dce, dceDto, bounds) {
        dce.starting_time = getStartingTime(dceDto, bounds);
      }

      /**
       * Given a DCE returns the ending time in months
       * @param dceDto
       * @param bounds
       * @returns {number}
       */
      function getEndingTime(dceDto, bounds) {
        var start = dceDto.hasOwnProperty('endYear') ? dceDto.endYear : 0;
        var end = dceDto.hasOwnProperty('endMonth') ? dceDto.endMonth : 12;
        return convertToMonths(start - bounds.start, start > 0 ? end : 0);
      }

      /**
       * Sets the ending time of an event in months
       * @param dce
       * @param dceDto
       */
      function setEndingTime(dce, dceDto, bounds) {
        dce.ending_time = getEndingTime(dceDto, bounds);
      }
    }
  }

  /**
   * Default options
   * @type {{maxMonths: number}}
   */
  $.MicaTimeline.defaultOptions = {
    maxMonths: 300
  };

}(jQuery));
