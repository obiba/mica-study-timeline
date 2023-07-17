(function () {

  new $.MicaTimeline(new $.StudyDtoParser(), clickHandler).create("#vis", getStartYearOnly()).addLegend();

  function clickHandler(studyDto, datum, dceId) {
    console.log('Timeline bar clicked', arguments);
    return '';
  }

  function getStartYearOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 1900
            }
          ]
        },
        {
          "id": "pop2",
          "name": [
            {
              "lang": "en",
              "value": "DADA"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2017
            }
          ]
        }
      ]
    }
  }

  function getStartYearMonthOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6
            }
          ]
        }
      ]
    }
  }

  function getStartYearEndYearOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "endYear": 2018
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthEndYearOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "endYear": 2018
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthEndYearEndMonthOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "endYear": 2018,
              "endMonth": 6
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthStartDayOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "startDay": "2016-06-01"
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthStartDayEndYearOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "startDay": "2016-06-01",
              "endYear": 2019
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthStartDayEndYearEnMonthOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "startDay": "2016-06-01",
              "endYear": 2019,
              "endMonth": 6
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthStartDayEndYearEnMonthEndDayOnly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "startDay": "2016-06-01",
              "endYear": 2019,
              "endMonth": 6,
              "endDay": "2019-06-01"
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthEndYearFutureOnly() {
    var futureYear = new Date().getFullYear() + 5;
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "endYear": futureYear
            }
          ]
        }
      ]
    }
  }

  function getStartYearStartMonthEndYearEndMonthFutureOnly() {
    var futureYear = new Date().getFullYear() + 5;
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "dce1",
              "name": [
                {
                  "lang": "en",
                  "value": "dce one"
                }
              ],
              "startYear": 2016,
              "startMonth": 6,
              "endYear": futureYear,
              "endMonth": 6,
            }
          ]
        }
      ]
    }
  }

  function getBiWeekly() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "1"
                }
              ],
              "startYear": 2016,
              "startMonth": 1,
              "startDay": "2016-01-01",
              "endYear": 2016,
              "endMonth": 1,
              "endDay": "2016-01-16"
            },
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "2"
                }
              ],
              "startYear": 2016,
              "startMonth": 1,
              "startDay": "2016-01-16",
              "endYear": 2016,
              "endMonth": 1,
              "endDay": "2016-01-31"
            },
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "3"
                }
              ],
              "startYear": 2016,
              "startMonth": 2,
              "startDay": "2016-02-01",
              "endYear": 2016,
              "endMonth": 2,
              "endDay": "2016-02-16"
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "4"
                }
              ],
              "startYear": 2016,
              "startMonth": 2,
              "startDay": "2016-02-16",
              "endYear": 2016,
              "endMonth": 2,
              "endDay": "2016-02-29"
            },
          ]
        }
      ]
    }
  }

function getBiWeeklyFuture() {
  var futureYear = new Date().getFullYear() + 5;

  return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {

      },
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {

          },
          "selectionCriteria": {

          },
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "1"
                }
              ],
              "startYear": futureYear,
              "startMonth": 1,
              "startDay": futureYear + "-01-01",
              "endYear": futureYear,
              "endMonth": 1,
              "endDay": futureYear + "-01-16"
            },
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "2"
                }
              ],
              "startYear": futureYear,
              "startMonth": 1,
              "startDay": futureYear + "-01-16",
              "endYear": futureYear,
              "endMonth": 1,
              "endDay": futureYear + "-01-31"
            },
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "3"
                }
              ],
              "startYear": futureYear,
              "startMonth": 2,
              "startDay": futureYear + "-02-01",
              "endYear": futureYear,
              "endMonth": 2,
              "endDay": futureYear + "-02-16"
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "4"
                }
              ],
              "startYear": futureYear,
              "startMonth": 2,
              "startDay": futureYear + "-02-16",
              "endYear": futureYear,
              "endMonth": 2,
              "endDay": futureYear + "-02-29"
            },
          ]
        }
      ]
    }
  }

  function getMixWithSomeBiWeekly() {
    var futureYear = new Date().getFullYear() + 5;

    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {},
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {},
          "selectionCriteria": {},
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "1"
                }
              ],
              "startYear": futureYear,
              "startMonth": 1,
              "startDay": futureYear + "-01-01",
              "endYear": futureYear,
              "endMonth": 1,
              "endDay": futureYear + "-01-16"
            },
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "2"
                }
              ],
              "startYear": futureYear,
              "startMonth": 1,
              "startDay": futureYear + "-01-16",
              "endYear": futureYear,
              "endMonth": 1,
              "endDay": futureYear + "-01-31"
            },
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "3"
                }
              ],
              "startYear": futureYear,
              "startMonth": 2,
              "startDay": futureYear + "-02-01",
              "endYear": futureYear,
              "endMonth": 2,
              "endDay": futureYear + "-02-16"
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "4"
                }
              ],
              "startYear": futureYear,
              "startMonth": 2,
              "startDay": futureYear + "-02-16",
              "endYear": futureYear,
              "endMonth": 2,
              "endDay": futureYear + "-02-29"
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "4"
                }
              ],
              "startYear": 2020,
              "startMonth": 2
            },
          ]
        }
      ]
    }
  }

  function getDCEsWithOverlapDates() {

    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:43:48.163-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Toto"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "Test Toto"
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "Test Objective"
        }
      ],
      "specificAuthorization": {
        "authorized": false
      },
      "maelstromAuthorization": {
        "authorized": false
      },
      "methods": {},
      "populations": [
        {
          "id": "pop1",
          "name": [
            {
              "lang": "en",
              "value": "ASAS"
            }
          ],
          "recruitment": {},
          "selectionCriteria": {},
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "1"
                }
              ],
              "startYear": 2018,
              "startMonth": 1,
              "endYear": 2018,
              "endMonth": 6,
            },
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "2"
                }
              ],
              "startYear": 2018,
              "startMonth": 6,
              "endYear": 2018,
              "endMonth": 8,
            },
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "3"
                }
              ],
              "startYear": 2018,
              "startMonth": 1,
              "endYear": 2018,
              "endMonth": 4,
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "4"
                }
              ],
              "startYear": 2018,
              "startMonth": 11,
              "endYear": 2018,
              "endMonth": 12,
            },
            {
              "id": "5",
              "name": [
                {
                  "lang": "en",
                  "value": "5"
                }
              ],
              "startYear": 2018,
              "startMonth": 11,
              "endYear": 2019,
              "endMonth": 3,
            },
          ]
        }
      ]
    }
  }

}());
