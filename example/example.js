(function () {

  var data = [1, 3, 4, 6, 10];
  var chart = d3.select("#vis")
      .append("svg")
      .chart("Circles")
      .width(100)
      .height(50)
      .radius(5);
  chart.draw(data);

  // https://www.maelstrom-research.org/content/canadian-multicentre-osteoporosis-study
  var timelineData = [
    {
      "pop_nid": "44411",
      "pop_title": "Adult Cohort (25 years and older)",
      "color": "#9a3034",
      "events": [
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44413",
          "dce_title": "Baseline",
          "start_year": "1995",
          "end_year": "1997",
          "start_month": 6,
          "end_month": "9",
          "created": 1385042460
        },
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44415",
          "dce_title": "Year 3 Follow-up",
          "start_year": "1998",
          "end_year": "2001",
          "start_month": 6,
          "end_month": "1",
          "created": 1385043902
        },
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44418",
          "dce_title": "Year 10 Follow-up",
          "start_year": "2005",
          "end_year": "2008",
          "start_month": 8,
          "end_month": "4",
          "created": 1385044818
        },
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44419",
          "dce_title": "Year 16 Follow-up",
          "start_year": "2012",
          "end_year": "2013",
          "start_month": 0,
          "end_month": "12",
          "created": 1385061522
        }
      ]
    },
    {
      "pop_nid": "44411",
      "pop_title": "Adult Cohort (25 years and older)",
      "color": "#9a3034",
      "events": [
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44416",
          "dce_title": "Annual Follow-up",
          "start_year": "1996",
          "end_year": "2015",
          "start_month": 7,
          "end_month": "1",
          "created": 1385044509
        }
      ]
    },
    {
      "pop_nid": "44411",
      "pop_title": "Adult Cohort (25 years and older)",
      "color": "#9a3034",
      "events": [
        {
          "color": "#9a3034",
          "pop_nid": "44411",
          "pop_title": "Adult Cohort (25 years and older)",
          "dce_nid": "44417",
          "dce_title": "Year 5 Follow-up",
          "start_year": "2000",
          "end_year": "2003",
          "start_month": 6,
          "end_month": "3",
          "created": 1385044782
        }
      ]
    },
    {
      "pop_nid": "44412",
      "pop_title": "Youth Cohort (16-24 years old)",
      "color": "#886e6a",
      "events": [
        {
          "color": "#886e6a",
          "pop_nid": "44412",
          "pop_title": "Youth Cohort (16-24 years old)",
          "dce_nid": "44414",
          "dce_title": "Baseline",
          "start_year": "2004",
          "end_year": "2006",
          "start_month": 6,
          "end_month": "6",
          "created": 1385042562
        },
        {
          "color": "#886e6a",
          "pop_nid": "44412",
          "pop_title": "Youth Cohort (16-24 years old)",
          "dce_nid": "44421",
          "dce_title": "Year 2 Follow-up",
          "start_year": "2006",
          "end_year": "2008",
          "start_month": 7,
          "end_month": "12",
          "created": 1385062296
        }
      ]
    },
    {
      "pop_nid": "44412",
      "pop_title": "Youth Cohort (16-24 years old)",
      "color": "#886e6a",
      "events": [
        {
          "color": "#886e6a",
          "pop_nid": "44412",
          "pop_title": "Youth Cohort (16-24 years old)",
          "dce_nid": "44420",
          "dce_title": "Year 1 Follow-up",
          "start_year": "2005",
          "end_year": "2008",
          "start_month": 8,
          "end_month": "2",
          "created": 1385062114
        }
      ]
    }
  ];

}());