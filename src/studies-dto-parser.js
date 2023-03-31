(function ($) {

  "use strict";

  var currentYear = new Date().getFullYear();
  var locale;
  /**
   * Constructor
   * @constructor
   */
  $.StudiesDtoParser = function (localSetting) {
    locale = localSetting ? localSetting : 'en';
  };

  /**
   * Class method definition
   * @type {{create: create}}
   */
  $.StudiesDtoParser.prototype = {

    parse: function (studiesDto) {
      if (studiesDto) {
        ensureValidity(studiesDto);
        var result = parseStudies(studiesDto, findBounds(studiesDto));
        console.dir(result);
        return result;
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
    const parts = date.split(/-/).map(function (t) {
      return parseInt(t);
    });

    return makeDate(parts[0], parts[1] - 1, parts[2]);
  }

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
   * Ensurre all dates are normalized; no need to for start/end year/month
   * @param studies
   */
  function ensureStartEndDates(study) {
    study.model.startDate = makeStartDate(study.model.startYear);

    var endYear = study.endYear;
    if (!endYear) {
      endYear = currentYear > study.model.startYear ? currentYear : study.model.startYear;
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
    var color = new $.ColorGenerator().nextColor();
    var studies = [];
    var studyData;

    $.each(studyDtos, function (i, studyDto) {
      studyData = {};
      setId(studyData, studyDto, 'id');
      setTitle(studyData, studyDto, 'name');
      studyData.label = translateField(studyDto.acronym);
      studyData.color = color;
      studies.push(createStudyItem(studyData, studyDto, bounds));
    });

    if (studies.length < 1) return null;
    var timelineData = { start: bounds.start, min: bounds.min, max: bounds.max, data: studies };
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



}(jQuery));
