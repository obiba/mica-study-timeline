(function () {

//  var MAX_MONTHS = 300;
//  var data = [1, 3, 4, 6, 10];
//  var chart = d3.select("#vis")
//      .append("svg")
//      .chart("Circles")
//      .width(100)
//      .height(50)
//      .radius(5);
//  chart.draw(data);

  createTimeline(getTestData(), 1138);

  function getTestData() {
    // https://www.maelstrom-research.org/content/canadian-multicentre-osteoporosis-study
    return  {
      "data": [
        {
          "population": {
            id: "pop001",
            title: "Adult Cohort (25 years and older)",
            "color": "#9a3034",
            "events": [
              {
                "id": "44413",
                "title": "Baseline",
                "starting_time": 6,
                "ending_time": 33
              },
              {
                "id": "44415",
                "title": "Year 3 Follow-up",
                "starting_time": 42,
                "ending_time": 73
              },
              {
                "id": "44418",
                "title": "Year 10 Follow-up",
                "starting_time": 128,
                "ending_time": 160
              },
              {
                "id": "44419",
                "title": "Year 16 Follow-up",
                "starting_time": 204,
                "ending_time": 228
              }
            ]
          }
        },

        {
          "population": {
            id: "pop002",
            title: "Adult Cohort (25 years and older)",
            "color": "#9a3034",
            "events": [
              {
                "id": "44416",
                "title": "Annual Follow-up",
                "starting_time": 19,
                "ending_time": 241
              }
            ]
          }
        },
        {
          "population": {
            id: "pop003",
            title: "Adult Cohort (25 years and older)",
            "color": "#9a3034",
            "events": [
              {
                "id": "44417",
                "title": "Year 5 Follow-up",
                "starting_time": 66,
                "ending_time": 99
              }
            ]

          }
        },
        {
          "population": {
            id: "pop004",
            title: "Youth Cohort (16-24 years old)",
            "color": "#886e6a",
            "events": [
              {
                "id": "44414",
                "title": "Baseline",
                "starting_time": 114,
                "ending_time": 138
              },
              {
                "id": "44421",
                "title": "Year 2 Follow-up",
                "starting_time": 139,
                "ending_time": 168
              }
            ]
          }
        },
        {
          "population": {
            id: "pop004",
            title: "Youth Cohort (16-24 years old)",
            "color": "#886e6a",
            "events": [
              {
                "id": "44420",
                "title": "Year 1 Follow-up",
                "starting_time": 128,
                "ending_time": 158
              }
            ]
          }
        }
      ],
      "start": 1995,
      "min": 0,
      "max": 252
    };

  }

  function createTimeline(timelineData, width) {
    var MAX_MONTHS = 300;
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
      .rotateTicks(timelineData.max > MAX_MONTHS ? 45 : 0)
      .click(function (d, i, datum) {
        $('#event-' + d.id).modal();
      });

    d3.select("#vis").append("svg").attr("width", width).datum(timelineData.data).call(chart);
  }

}());