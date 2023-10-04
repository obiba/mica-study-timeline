(function ($) {

  "use strict";

  var currentYear = new Date().getFullYear();
  var locale;
  var colorGenerator;

  /**
   * Constructor
   * @constructor
   */
  $.StudiesDtoParser = function (localSetting) {
    locale = localSetting ? localSetting : 'en';
    colorGenerator = new $.ColorGenerator();
  };

  /**
   * Class method definition
   * @type {{create: create}}
   */
  $.StudiesDtoParser.prototype = {
    setColorGenerator: function(generator) {
      if (generator) {
        colorGenerator = generator;
      }

      return this;
    },

    parse: function (studiesDto) {
      if (studiesDto) {
        ensureValidity(studiesDto);
        var result = parseStudies(studiesDto, findBounds(studiesDto));
        return result;
      }

      return null;
    },

  };

  function makeDate(year, month, day) {
    return new Date(year, month, day);
  }

  function makeStartDate(year, month) {
    return makeDate(year, (month || 1) - 1, 1);
  }

  function makeEndDate(year, month) {
    var m = (month || 12) - 1;
    var d = new Date(year, m + 1, 0).getDate();
    return makeDate(year, m, d);
  }

  function ensureModel(study) {
    if (!study.hasOwnProperty('model') && study.hasOwnProperty('content')) {
      study.model = JSON.parse(study.content);
    }
  }

  /**
   * Ensure all dates are normalized; no need to for start/end year/month
   * @param studies
   */
  function ensureStartEndDates(study) {
    var startYear = study.model.startYear || currentYear;
    study.model.startDate = makeStartDate(startYear);

    var endYear = study.model.endYear;
    study.model.ongoing = !endYear;
    
    if (!endYear) {
      endYear = currentYear > startYear ? currentYear : startYear;
    }
    study.model.endDate = makeEndDate(endYear);
  }

  /**
   * Ensurre validity
   * @param studies
   */
  function ensureValidity(studies) {
    $.each(studies, function (i, study) {
      ensureModel(study);
      ensureStartEndDates(study);
    });
  }

  /**
   * Returns the date bounds of all population, startYear and maxYear (in months)
   * @param studies
   * @returns {{min: number, max: number, start: Number}}
   */
  function findBounds(studies) {
    var startYear = Number.MAX_VALUE;
    var endYear = Number.MIN_VALUE;

    $.each(studies, function (i, study) {
      if (study.model) {
        startYear = Math.min(startYear, study.model.startDate.getFullYear());
        var studyEndYear = study.model.endDate.getFullYear();
        if (endYear < studyEndYear) {
          endYear = studyEndYear;
        }
      }
    });
    return {
      min: makeStartDate(startYear),
      max: makeStartDate(endYear + 1)
    };
  }

  /**
   * Converts a StudyDto to timeline compatible data format
   * @param studyDtos
   * @param bounds
   */
  function parseStudies(studyDtos, bounds) {
    var color = colorGenerator.nextColor();
    var studies = [];
    var studyData;
    var longestLabel = "";

    $.each(studyDtos, function (i, studyDto) {
      studyData = {};
      setId(studyData, studyDto, 'id');
      setTitle(studyData, studyDto, 'name');
      studyData.label = translateField(studyDto.acronym);
      studyData.color = color;

      // Use this calculate margin in timeline
      if (longestLabel.length < studyData.label.length) longestLabel = studyData.label;

      studies.push(createStudyItem(studyData, studyDto, bounds));
    });

    if (studies.length < 1) return null;
    var timelineData = { start: bounds.start, min: bounds.min, max: bounds.max, data: studies, longestLabel: longestLabel };
    return timelineData;
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
   * Create a study item
   * @param studyData
   * @param studyDto
   * @param bounds
   * @returns {{population: *}}
   */
  function createStudyItem(studyData, studyDto, bounds) {
    var cloneObject = jQuery.extend({}, studyData);
    cloneObject.events = [createEventItem(studyDto)];
    return cloneObject;
  }

  /**
   * Creates an time event item
   * @param studyDto
   * @param bounds
   * @returns {{}}
   */
  function createEventItem(studyDto) {
    var study = {};
    setId(study, studyDto, 'id');
    setTitle(study, studyDto, 'name');
    setStartingTime(study, studyDto);
    setEndingTime(study, studyDto);
    setOnGoing(study, studyDto);
    return study;
  }

  /**
   * Sets the starting time of an event in months
   * @param dce
   * @param studyDto
   * @param bounds
   */
  function setStartingTime(dce, studyDto) {
    dce.starting_time = studyDto.model.startDate;
  }

  /**
   * Sets the ending time of an event in months
   * @param dce
   * @param studyDto
   * @param bounds
   */
  function setEndingTime(dce, studyDto) {
    dce.ending_time = studyDto.model.endDate;
  }

  /**
   * Sets the ending time of an event in months
   * @param dce
   * @param studyDto
   * @param bounds
   */
  function setOnGoing(dce, studyDto) {
    dce.ongoing = studyDto.model.ongoing;
    dce.ending_time = studyDto.model.endDate;
  }



}(jQuery));
