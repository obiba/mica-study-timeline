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
      if (this.parser === null || studyDto === null) return;
      var timelineData = this.parser.parse(studyDto);
      var width = $(selectee).width();
      var that = this;
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
        .rotateTicks(timelineData.max > $.MicaTimeline.defaultOptions.maxMonths ? 45 : 0)
        .click(function (d, i, datum) {
          if (that.popupIdFormatter) {
            var popup = $(that.popupIdFormatter(studyDto, datum.population, d));
            if (popup.length > 0) popup.modal();
          }
        });

      d3.select(selectee).append("svg").attr("width", width).datum(timelineData.data).call(chart);

      if (this.useBootstrapTooltip === true) {
        d3.select(selectee).selectAll('#line-path')
          .attr('data-placement', 'top')
          .attr('data-toggle', 'tooltip')
          .attr('data-original-title', function(d){
            return d.title;
          })
          .selectAll('title').remove(); // remove default tooltip
      }

      this.timelineData = timelineData;
      this.selectee = selectee;

      return this;
    },

    addLegend: function () {
      if (!this.timelineData.hasOwnProperty('data') || this.timelineData.data.length === 0) return;
      var ul = $("<ul id='legend' class='timeline-legend'>");

      $(this.selectee).after(ul);

      var processedPopulations = {};
      $.each(this.timelineData.data, function(i, item) {
        if (!processedPopulations.hasOwnProperty(item.population.title)) {
          processedPopulations[item.population.title] = true;
          var li = $(createLegendRow(item.population.color, item.population.title));
          ul.append(li);
        }
      });
      
      return this;
    }
  };

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
