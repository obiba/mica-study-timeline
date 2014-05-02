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
      var timelineData = studyDtoToTimelineData(studyDto);
      if (timelineData === null) return;

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
   * Converts a StudyDto to timeline compatible data format
   * @param studyDto
   */
  function studyDtoToTimelineData(studyDto) {
    var bound = {min: Number.MAX_VALUE, max: Number.MIN_VALUE};
    var populations = getPopulationsData(studyDto, bound);
    if (populations.length === 0) return null;
    var timelineData = {start: (bound.min - 1)/12, min: 0, max: bound.max - bound.min, data: populations};

    console.log("RESULT:", timelineData);

    return timelineData;
  }

  /**
   * Given a Study Dto, extracts the required fields and formats the data required for timeline rendering
   * @param studyDto
   */
  function getPopulationsData(studyDto, bound) {
    if (studyDto === null || !studyDto.hasOwnProperty('populations')) return;

    var populations = [];
    var populationData;
    $.each(studyDto.populations, function (i, populationDto) {
      populationData = {};
      setId(populationData, populationDto, 'id');
      setTitle(populationData, populationDto, 'name');
      setEvents(populationData, populationDto.dataCollectionEvents, bound);
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
    function setEvents(populationData, dto, bound) {
      if (jQuery.isEmptyObject(dto)) return;

      var dces = [];
      $.each(dto, function (i, dceDto) {
        var dce = {};
        setId(dce, dceDto, 'id');
        setTitle(dce, dceDto, 'name');
        setStartingTime(dce, dceDto, bound);
        setEndingTime(dce, dceDto, bound);
        if (!jQuery.isEmptyObject(dce)) dces.push(dce);
      });

      if (dces.length > 0) populationData.events = dces;

      /**
       * Sets the starting time of an event in months
       * @param dce
       * @param dceDto
       */
      function setStartingTime(dce, dceDto, bound) {
        var start = dceDto.hasOwnProperty('startYear') ? dceDto.startYear : 0;
        var end = dceDto.hasOwnProperty('startMonth') ? dceDto.startMonth : 1;
        dce.starting_time = convertToMonths(start, start > 0 ? end : 0);
        if (bound.min > dce.starting_time) bound.min = dce.starting_time;
      }

      /**
       * Sets the ending time of an event in months
       * @param dce
       * @param dceDto
       */
      function setEndingTime(dce, dceDto, bound) {
        var start = dceDto.hasOwnProperty('endYear') ? dceDto.endYear : 0;
        var end = dceDto.hasOwnProperty('endMonth') ? dceDto.endMonth : 12;
        dce.ending_time = convertToMonths(start, start > 0 ? end : 0);
        if (bound.max < dce.ending_time) bound.max = dce.ending_time;
      }

      /**
       * Converts to months
       * @param year
       * @param month
       * @returns {number}
       */
      function convertToMonths(year, month) {
        console.log("y", year, "m", month, "=", (12 * parseInt(year, 10) + parseInt(month, 10)));
        return 12 * parseInt(year, 10) + parseInt(month, 10);
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