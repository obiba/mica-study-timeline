(function ($) {

  "use strict";

  $.MicaTimeline = function () {
  };

  $.MicaTimeline.prototype = {

    create: function (selectee, timelineData) {
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

  $.MicaTimeline.defaultOptions = {
    maxMonths: 300
  };

}(jQuery));