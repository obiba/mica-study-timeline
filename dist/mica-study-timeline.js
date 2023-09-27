/*Copyright (c) 2015 OBiBa. All rights reserved.
* This program and the accompanying materials
* are made available under the terms of the GNU Public License v3.0.
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see  <http://www.gnu.org/licenses>

* mica-study-timeline - v1.2.0
* Date: 2023-09-27
 */
(function () {

  "use strict";

  d3.timeline = function () {
    var DISPLAY_TYPES = ["circle", "rect"];

    var hover = function () { },
      click = function () { },
      tooltipFormatter = function(d, i , datum) { return d.title;},
      scroll = function () { },            
      orient = "bottom",
      width = null,
      heightWithoutRotation = null,
      height = null,
      tickFormat = {
        format: d3.format("d"),
        tickTime: 1,
        tickNumber: 1,
        tickSize: 10
      },
      colorCycle = d3.scale.category20(),
      display = "rect",
      beginning = 0,
      ending = 0,
      margin = { left: 30, right: 30, top: 30, bottom: 30 },
      stacked = false,
      rotateTicks = false,
      itemHeight = 10,
      itemMargin = 5,
      strokeWidth = 10;

    function timeline(gParent) {
      var g = gParent.append("g");
      var gParentSize = gParent[0][0].getBoundingClientRect();
      var gParentItem = d3.select(gParent[0][0]);

      var yAxisMapping = {},
        maxStack = 1,
        minTime = 0,
        maxTime = 0;

      setWidth();

      // check how many stacks we're gonna need
      // do this here so that we can draw the axis before the graph
      if (stacked || (ending === 0 && beginning === 0)) {
        g.each(function (d, i) {
          d.forEach(function (datum, index) {

            // create y mapping for stacked graph
            if (stacked && Object.keys(yAxisMapping).indexOf(index) == -1) {
              yAxisMapping[index] = maxStack;
              maxStack++;
            }

            // figure out beginning and ending times if they are unspecified
            if (ending === 0 && beginning === 0) {
              datum.events.forEach(function (event, i) {
                if (event.starting_time < minTime || minTime === 0) {
                  minTime = event.starting_time;
                }
                if (event.ending_time > maxTime) {
                  maxTime = event.ending_time;
                }
              });
            }
          });
        });

        if (ending === 0 && beginning === 0) {
          beginning = minTime;
          ending = maxTime;
        }
      }

      var scaleFactor = (1 / (ending - beginning)) * (width - margin.left - margin.right);

      // draw the axis
      var xScale = d3.time.scale()
        .domain([beginning.getFullYear(), ending.getFullYear()])
        .range([margin.left, width - margin.right]);
      var tickValues = d3.range(beginning.getFullYear(), ending.getFullYear() + 1);

      var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient(orient)
        .tickFormat(tickFormat.format)
        .tickSubdivide(1)
        .tickValues(tickValues)
        .tickSize(tickFormat.tickSize, tickFormat.tickSize / 2, 0);

      // draw axis
      g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 0 + "," + (margin.top + (itemHeight + itemMargin) * maxStack) + ")")
        .call(xAxis);

      setHeightWithoutRotation(g[0][0].getBoundingClientRect());

      if (rotateTicks) {
        g.selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "3em")
          .attr("dy", ".15em")
          .attr("transform", "rotate("+rotateTicks+")");
      }

      setHeight(g[0][0].getBoundingClientRect());

      g.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + (heightWithoutRotation - tickFormat.tickSize * 2) + ")")
        .call(make_vertical_gridline());

      g.append("g")
        .attr("class", "grid-tooltip")
        .attr("transform", "translate(0," + (heightWithoutRotation - tickFormat.tickSize * 2) + ")")
        .call(make_vertical_gridline());

      // Add tooltip
      d3.selectAll('.grid-tooltip > .tick').each(function (d, i) {
        d3.select(this).attr("stroke-width", strokeWidth + 'px').insert("title", ":first-child").html(d);
      });

      // draw the chart
      g.each(function (d, i) {
        d.forEach(function (datum, index) {
          var data = datum.events;
          var hasLabel = (typeof (datum.label) != "undefined");
          g.selectAll("svg").data(data).enter()
            .append("path")
            .attr('id', 'line-path')
            .attr("d", function drawRect(d, i) {
              var rectX = getXPos(d, i);
              var rectY = getStackPosition(d, i);
              var rectWidth = getWidth(d, i);
              return d.ongoing ? rightArrowRect(rectX, rectY, rectWidth, itemHeight, 5) : rightRoundedRect(rectX, rectY, rectWidth, itemHeight, 5);
            })
            .style("fill", datum.color)
            .on("mouseover", function (d, i) {
              hover(d, index, datum);
            })
            .on("click", function (d, i) {
              click(d, index, datum);
            })
            .append("title").text(function (d) {
              return tooltipFormatter(d, i, datum);
            });

          // add the label
          if (hasLabel) {
            var fullItemHeight = itemHeight + itemMargin;
            var rowsDown = margin.top + (fullItemHeight / 2) + fullItemHeight * (yAxisMapping[index] || 1);

            gParent.append("text")
              .attr("class", "timeline-label")
              .attr("text-anchor", "end")
              .attr("transform", "translate(" + (margin.left - itemMargin) + "," + rowsDown + ")")              
              .text(hasLabel ? datum.label : datum.id)
              .on("click", function (d, i) {
                click(d, index, datum);
              })
              .insert("title", ":first-child").html(tooltipFormatter(d, i, datum));
          }

          if (typeof (datum.icon) != "undefined") {
            gParent.append('image')
              .attr("class", "timeline-label")
              .attr("transform", "translate(" + 0 + "," + (margin.top + (itemHeight + itemMargin) * yAxisMapping[index]) + ")")
              .attr("xlink:href", datum.icon)
              .attr("width", margin.left)
              .attr("height", itemHeight);
          }

          function getStackPosition(d, i) {
            return stacked ? margin.top + (itemHeight + itemMargin) * yAxisMapping[index] : margin.top;
          }
        });
      });

      function make_vertical_gridline() {
        return d3.svg.axis()
          .scale(xScale)
          .orient("bottom")
          .tickFormat("")
          .tickSubdivide(1)
          .tickValues(d3.range(beginning.getFullYear(), ending.getFullYear() + 1))
          .tickSize(-heightWithoutRotation, tickFormat.tickSize / 2, 0);
      }

      function getXPos(d, i) {
        return margin.left + (d.starting_time - beginning) * scaleFactor;
      }

      function getWidth(d, i) {
        return (d.ending_time - d.starting_time) * scaleFactor;
      }

      function setHeightWithoutRotation(gSize) {
        if (!gParentItem.attr("height")) {
          if (itemHeight) {
            // set height based off of item height
            heightWithoutRotation = gSize.height + gSize.top - gParentSize.top;
          } else {
            throw "height of the timeline is not set";
          }
        } else {
          if (!height) {
            heightWithoutRotation = gParentItem.attr("height");
          } else {
            heightWithoutRotation = height;
          }
        }
      }

      function setHeight(gSize) {
        if (!height && !gParentItem.attr("height")) {
          if (itemHeight) {
            // set height based off of item height
            height = gSize.height + gSize.top - gParentSize.top;
            // set bounding rectangle height
            d3.select(gParent[0][0]).attr("height", height);
          } else {
            throw "height of the timeline is not set";
          }
        } else {
          if (!height) {
            height = gParentItem.attr("height");
          } else {
            gParentItem.attr("height", height);
          }
        }
      }

      function setWidth() {
        if (!width && !gParentSize.width) {
          throw "width of the timeline is not set";
        } else if (!(width && gParentSize.width)) {
          if (!width) {
            width = gParentItem.attr("width");
          } else {
            gParentItem.attr("width", width);
          }
        }
        // if both are set, do nothing
      }

      function rightArrowRect(x, y, width, height, radius) {
        return "M" + x + "," + y +
          "h" + (width - radius) +
          "l" + (radius) + ", " + (height/2) +
          "l" + (-radius) + ", " + (height/2) +
          "h" + (radius - width) +
          "z";
      }

      function rightRoundedRect(x, y, width, height, radius) {
        return "M" + x + "," + y +
          "h" + (width - radius) +
          "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius +
          "v" + (height - 2 * radius) +
          "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius +
          "h" + (radius - width) +
          "z";
      }

    }

    timeline.margin = function (p) {
      if (!arguments.length) return margin;
      margin = p;
      return timeline;
    };

    timeline.orient = function (orientation) {
      if (!arguments.length) return orient;
      orient = orientation;
      return timeline;
    };

    timeline.itemHeight = function (h) {
      if (!arguments.length) return itemHeight;
      itemHeight = h;
      return timeline;
    };

    timeline.itemMargin = function (h) {
      if (!arguments.length) return itemMargin;
      itemMargin = h;
      return timeline;
    };

    timeline.height = function (h) {
      if (!arguments.length) return height;
      height = h;
      return timeline;
    };

    timeline.width = function (w) {
      if (!arguments.length) return width;
      width = w;
      return timeline;
    };

    timeline.display = function (displayType) {
      if (!arguments.length || (DISPLAY_TYPES.indexOf(displayType) == -1)) return display;
      display = displayType;
      return timeline;
    };

    timeline.tickFormat = function (format) {
      if (!arguments.length) return tickFormat;
      tickFormat = format;
      return timeline;
    };

    timeline.hover = function (hoverFunc) {
      if (!arguments.length) return hover;
      hover = hoverFunc;
      return timeline;
    };

    timeline.click = function (clickFunc) {
      if (!arguments.length) return click;
      click = clickFunc;
      return timeline;
    };

    timeline.colors = function (colorFormat) {
      if (!arguments.length) return colorCycle;
      colorCycle = colorFormat;
      return timeline;
    };

    timeline.beginning = function (b) {
      if (!arguments.length) return beginning;
      beginning = b;
      return timeline;
    };

    timeline.ending = function (e) {
      if (!arguments.length) return ending;
      ending = e;
      return timeline;
    };

    timeline.rotateTicks = function (degrees) {
      rotateTicks = degrees;
      return timeline;
    };

    timeline.stack = function () {
      stacked = !stacked;
      return timeline;
    };

    timeline.strokeWidth = function (s) {
      strokeWidth = s;
      return timeline;
    };

    timeline.tooltipFormatter = function(f) {
      if (f) {
        tooltipFormatter = f;
      }
      return timeline;
    };

    return timeline;
  };
})();

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
        setOnGoing(study, studyDto);
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
   * Ensurre all dates are normalized; no need to for start/end year/month
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
    '#99c1c3', // Light blue
    '#306d05', // Green variation
    '#f25314'  // Orange variation
  ];

  $.ColorGenerator = function (palette) {
    this.colorPalette = jQuery.isEmptyObject(palette) ? defaultPalette : palette;
    this.index = 0;
    this.rotation = 1;
  };

  $.ColorGenerator.prototype = {
    nextColor: function () {
      // TODO need a better alternation algorithm
      var color = shadeColor(this.colorPalette[this.index], ((this.rotation % 10) === 0 ? -1 : 1) * (this.rotation) / 70);
      this.index = (this.index + 1) % this.colorPalette.length;
      if (this.index === 0) this.rotation++;
      return color;
    }
  };

  function shadeColor(color, percent) {
    // validate hex string
    var hex = String(color).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    percent = percent || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * percent)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }
}(jQuery));
(function ($) {

  "use strict";

  /**
   * Constructor
   * @constructor
   */
  $.MicaTimeline = function (dtoParser, clickHandler, useBootstrapTooltip, tooltipFormatter) {
    this.parser = dtoParser;
    this.clickHandler = clickHandler;
    this.useBootstrapTooltip = useBootstrapTooltip;
    this.tooltipFormatter = tooltipFormatter;
  };

  /**
   * Class method definition
   * @type {{create: create}}
   */
  $.MicaTimeline.prototype = {

    create: function (selectee, dto) {
      var clone = jQuery.extend(true, {}, dto);
      if (this.parser === null || clone === null) return;
      var timelineData = this.parser.parse(clone);
      if (timelineData) createTimeline(this, timelineData, selectee, clone);
      return this;
    },

    addLegend: function () {
      if (!this.timelineData || !this.timelineData.hasOwnProperty('data') || this.timelineData.data.length === 0) return;
      var ul = $("<ul id='legend' class='timeline-legend'>");

      $(this.selectee).after(ul);

      var processedPopulations = {};
      $.each(this.timelineData.data, function (i, item) {
        if (!processedPopulations.hasOwnProperty(item.title)) {
          processedPopulations[item.title] = true;
          var li = $(createLegendRow(item.color, item.title));
          ul.append(li);
        }
      });

      return this;
    },

    reset: function () {
      $(this.selectee).empty();
      $('.timeline-legend').remove();
      return this;
    }
  };

  function calculateTextSize(text) {
    if (!d3) return;
    var container = d3.select('body').append('svg');
    container.append('text')
      .attr("class", "timeline-label")
      .attr({ x: -99999, y: -99999 }) // place off screen
      .text(text);
    var size = container.node().getBBox();
    container.remove();
    return { width: size.width, height: size.height };
  }

  function calculateTickTextSize(text) {
    if (!d3) return;
    var container = d3.select('body').append('svg');
    container.append('g')
      .attr("class", "axis")
      .append('text')
      .attr({ x: -99999, y: -99999 }) // place off screen
      .text(text);
    var size = container.node().getBBox();
    container.remove();
    return { width: size.width, height: size.height };
  }

  function createTimeline(timeline, timelineData, selectee, dto) {
    var width = $(selectee).width();
    var margin = { left: 15 + (timelineData.longestLabel ? calculateTextSize(timelineData.longestLabel).width : 0), right: 15, top: 0, bottom: 20 };
    var numberOfTicks = timelineData.max.getFullYear() - timelineData.min.getFullYear() + 1;
    var strokeWidth = Math.floor((width - margin.right - margin.left) / numberOfTicks);
    var tickTextWidth = Math.floor(calculateTickTextSize("9999").width);
    var formatter = function (d, i) { return d3.format("d")(d); };

    if (strokeWidth < 12) {
      var chunks = Math.floor((width - margin.right - margin.left) / (tickTextWidth));
      var steps = Math.ceil(numberOfTicks / chunks);

      formatter = function (d, i) {
        if (i % steps === 0) return d3.format("d")(d);
        else return '';
      };
    }


    var chart = d3.timeline()
      .beginning(timelineData.min)
      .ending(timelineData.max)
      .width(width)
      .stack()
      .tickFormat({
        format: formatter,
        tickTime: 1,
        tickNumber: 1,
        tickSize: 10
      })
      .margin(margin)
      .strokeWidth(strokeWidth)
      .rotateTicks(strokeWidth >= 12 && timelineData.max.getFullYear() - timelineData.min.getFullYear() > 30 ? 45 : 0)
      .click(function (d, i, datum) {
        if (timeline.clickHandler) {
          timeline.clickHandler.call(null, dto, datum, d);
        }
      })
      .tooltipFormatter(timeline.tooltipFormatter);

    d3.select(selectee).append("svg").attr("width", width).datum(timelineData.data).call(chart);

    if (timeline.useBootstrapTooltip === true) {
      d3.select(selectee).selectAll('#line-path')
        .attr('data-placement', 'top')
        .attr('data-toggle', 'tooltip')
        .attr('title', function (d) {
          return d.title;
        })
        .selectAll('title').remove(); // remove default tooltip
    }

    timeline.timelineData = timelineData;
    timeline.selectee = selectee;
  }

  /**
   * @param color
   * @param title
   * @returns {*|HTMLElement}
   */
  function createLegendRow(color, title) {
    var rect = "<rect width='20' height='20' x='2' y='2' rx='5' ry='5' style='fill:COLOR;'>".replace(/COLOR/, color);
    return $("<li><svg width='25' height='25'>" + rect + "</svg>" + title + "</li>");
  }

  /**
   * Default options
   * @type {{maxMonths: number}}
   */
  $.MicaTimeline.defaultOptions = {
    maxMonths: 300
  };

}(jQuery));
