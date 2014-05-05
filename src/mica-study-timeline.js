(function ($) {

  "use strict";

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
    var startYear= Number.MAX_VALUE;
    var maxYear= Number.MIN_VALUE;
    $.each(populations, function (i, population) {
      if (population.hasOwnProperty('dataCollectionEvents')) {
        $.each(population.dataCollectionEvents, function (j, dce) {
          console.log(dce.startYear, dce.endYear);
          startYear = Math.min(startYear, dce.startYear);
          maxYear = Math.max(maxYear, convertToMonths(dce.endYear - startYear, dce.hasOwnProperty('endMonth') ? dce.endMonth : 12));
        });
      }
    });

    return {min: 0, max: Math.ceil(maxYear/12) * 12, start: startYear};
  }

  /**
   * Converts to months
   * @param year
   * @param month
   * @returns {number}
   */
  function convertToMonths(year, month) {
//    console.log("y", year, "m", month, "=", (12 * parseInt(year, 10) + parseInt(month, 10)));
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
//    console.log("RESULT:", timelineData);

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
    $.each(studyDto.populations, function (i, populationDto) {
      populationData = {};
      setId(populationData, populationDto, 'id');
      setTitle(populationData, populationDto, 'name');
      setEvents(populationData, populationDto.dataCollectionEvents, bounds);
      if (!jQuery.isEmptyObject(populationData)) {
        populationData.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        populations.push({population: populationData});
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
      if (dto.hasOwnProperty(field)) obj[field] = dto[field][0].value;
    }

    /**
     * Set the data collection events of a given population
     * @param populationData
     * @param dto
     */
    function setEvents(populationData, dto, bounds) {
      if (jQuery.isEmptyObject(dto)) return;

      var dces = [];
      $.each(dto, function (i, dceDto) {
        var dce = {};
        setId(dce, dceDto, 'id');
        setTitle(dce, dceDto, 'name');
        setStartingTime(dce, dceDto, bounds);
        setEndingTime(dce, dceDto, bounds);
        if (!jQuery.isEmptyObject(dce)) dces.push(dce);
      });

      if (dces.length > 0) populationData.events = dces;

      /**
       * Sets the starting time of an event in months
       * @param dce
       * @param dceDto
       */
      function setStartingTime(dce, dceDto, bounds) {
        var start = dceDto.hasOwnProperty('startYear') ? dceDto.startYear : 0;
        var end = dceDto.hasOwnProperty('startMonth') ? dceDto.startMonth - 1 : 0;
        dce.starting_time = convertToMonths(start - bounds.start, start > 0 ? end : 0);
      }

      /**
       * Sets the ending time of an event in months
       * @param dce
       * @param dceDto
       */
      function setEndingTime(dce, dceDto, bounds) {
        var start = dceDto.hasOwnProperty('endYear') ? dceDto.endYear : 0;
        var end = dceDto.hasOwnProperty('endMonth') ? dceDto.endMonth : 12;
        dce.ending_time = convertToMonths(start - bounds.start, start > 0 ? end : 0);
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