(function ($) {

  "use strict";

  /**
   * Constructor
   * @constructor
   */
  $.MicaTimeline = function (dtoParser, popupIdFormatter, useBootstrapTooltip) {
    this.parser = dtoParser;
    this.popupIdFormatter = popupIdFormatter;
    this.useBootstrapTooltip = useBootstrapTooltip;
  };

  /**
   * Class method definition
   * @type {{create: create}}
   */
  $.MicaTimeline.prototype = {

    create: function (selectee, studyDto) {
      var clone = jQuery.extend(true,{} , studyDto);
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
      $.each(this.timelineData.data, function(i, item) {
        if (!processedPopulations.hasOwnProperty(item.title)) {
          processedPopulations[item.title] = true;
          var li = $(createLegendRow(item.color, item.title));
          ul.append(li);
        }
      });

      return this;
    },

    reset: function() {
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

  function createTimeline(timeline, timelineData, selectee, studyDto) {
    var width = $(selectee).width();
    var margin = { left: 15 + (timelineData.longestLabel ? calculateTextSize(timelineData.longestLabel).width : 0), right: 15, top: 0, bottom: 20 };
    var chart = d3.timeline()
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
      .margin(margin)
      .rotateTicks(timelineData.max.getFullYear() -  timelineData.min.getFullYear() > 30 ? 45 : 0)
      .click(function (d, i, datum) {
        if (timeline.popupIdFormatter) {
          var popup = $(timeline.popupIdFormatter(studyDto, datum, d));
          if (popup.length > 0) popup.modal();
        }
      });

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
    var rect ="<rect width='20' height='20' x='2' y='2' rx='5' ry='5' style='fill:COLOR;'>".replace(/COLOR/, color);
    return $("<li><svg width='25' height='25'>"+rect+"</svg>"+title+"</li>");
  }

  /**
   * Default options
   * @type {{maxMonths: number}}
   */
  $.MicaTimeline.defaultOptions = {
    maxMonths: 300
  };

}(jQuery));
