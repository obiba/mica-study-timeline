(function () {

  var data = getTestData();
  sortStudyPopulationsByDce(data.populations);
  new $.MicaTimeline().create("#vis", data);

//  test();

  function test() {
    var data = getTestData();
    dumpDCE(data);
    sortStudyPopulationsByDce(data.populations);
    console.log("===========");
    dumpDCE(data);
  }

  function dumpDCE(data) {
    $.each(data.populations, function (i, population) {
      $.each(population.dataCollectionEvents, function (j, dce) {
        console.log(i, " StartY:", dce.startYear, "startMonth:", dce.startMonth, "EndYear:", dce.endYear, "EndMonth:", dce.endMonth);
      });
    });
  }

  function toMonths(y, m) {
    return 12 * y + m;
  }

  function sortStudyPopulationsByDce(populations) {

    $.each(populations, function (i, population) {
      if (!population.hasOwnProperty('dataCollectionEvents')) next;
      population.dataCollectionEvents.sort(sortByDates);
    });

    populations.sort(sortPopulation);
    console.log(JSON.stringify(populations));
  }

  function sortByDates(a, b) {
    var startA = toMonths(getDceField(a, 'startYear'), getDceField(a, 'startMonth'));
    var startB = toMonths(getDceField(b, 'startYear'), getDceField(b, 'startMonth'));
    if (startA === startB) {
      var endA = toMonths(getDceField(a, 'endYear'), getDceField(a, 'endMonth'));
      var endB = toMonths(getDceField(b, 'endYear'), getDceField(b, 'endMonth'));
      if (endA === endB) return 0;
      else return endA < endB ? -1 : 1;
    }
    return startA < startB ? -1 : 1;
  }

  function sortPopulation(a, b) {
    if (!a.hasOwnProperty('dataCollectionEvents') || a.dataCollectionEvents.length == 0) return 1;
    if (!b.hasOwnProperty('dataCollectionEvents') || b.dataCollectionEvents.length == 0) return 1;
    var firstDceA = a.dataCollectionEvents[0];
    var firstDceB = b.dataCollectionEvents[0];
    var startA = toMonths(getDceField(firstDceA, 'startYear'), getDceField(firstDceA, 'startMonth'));
    var startB = toMonths(getDceField(firstDceB, 'startYear'), getDceField(firstDceB, 'startMonth'));
    if (startA == startB) {
      var endA = toMonths(getDceField(firstDceA, 'endYear'), getDceField(firstDceA, 'endMonth'));
      var endB = toMonths(getDceField(firstDceB, 'endYear'), getDceField(firstDceB, 'endMonth'));
      if (endA == endB) return 0;
      else return endA < endB ? -1 : 1;
    }
    else return startA < startB ? -1 : 1;
  }

  function getDceField(obj, field) {
    return obj.hasOwnProperty(field) ? obj[field] : 0;
  }

  function getTestData() {
    return {
      "id": "5362bcbae4b09be1985f144f",
      "timestamps": {
        "created": "2014-05-01T17:29:30.530-04:00"
      },
      "name": [
        {
          "lang": "en",
          "value": "Canadian Longitudinal Study on Aging"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "CLSA"
        }
      ],
      "investigators": [
        {
          "title": "Dr.",
          "firstName": "Parminder",
          "lastName": "Raina",
          "email": "praina@mcmaster.ca",
          "phone": "1-905-525-9140 ext. 22197",
          "institution": {
            "name": [
              {
                "lang": "en",
                "value": "McMaster University"
              }
            ],
            "department": [
              {
                "lang": "en",
                "value": "Department of Clinical Epidemiology & Biostatistics"
              }
            ],
            "address": {
              "city": [
                {
                  "lang": "en",
                  "value": "Hamilton"
                }
              ],
              "state": "ON",
              "country": {
                "iso": "CAN",
                "name": [
                  {
                    "lang": "en",
                    "value": ""
                  }
                ]
              }
            }
          }
        }
      ],
      "contacts": [
        {
          "title": "Dr.",
          "firstName": "Parminder",
          "lastName": "Raina",
          "email": "praina@mcmaster.ca",
          "phone": "1-905-525-9140 ext. 22197",
          "institution": {
            "name": [
              {
                "lang": "en",
                "value": "McMaster University"
              }
            ],
            "department": [
              {
                "lang": "en",
                "value": "Department of Clinical Epidemiology & Biostatistics"
              }
            ],
            "address": {
              "city": [
                {
                  "lang": "en",
                  "value": "Hamilton"
                }
              ],
              "state": "ON",
              "country": {
                "iso": "CAN",
                "name": [
                  {
                    "lang": "en",
                    "value": ""
                  }
                ]
              }
            }
          }
        }
      ],
      "objectives": [
        {
          "lang": "en",
          "value": "The Canadian Longitudinal Study on Aging (CLSA) is a large, national, long-term study that will follow approximately 50,000 men and women between the ages of 45 and 85 for at least 20 years. The study will collect information on the changing biological, medical, psychological, social, lifestyle and economic aspects of people’s lives. These factors will be studied in order to understand how, individually and in combination, they have an impact in both maintaining health and in the development of disease and disability as people age."
        }
      ],
      "website": "http://www.clsa-elcv.ca",
      "specificAuthorization": {
        "authorized": true,
        "authorizer": "opal",
        "date": "2014-05-01T17:29:30.496"
      },
      "maelstromAuthorization": {
        "authorized": true,
        "authorizer": "mica",
        "date": "2014-05-01T17:29:30.499"
      },
      "methods": {
        "designs": [
          "case_control",
          "clinical_trial",
          "other"
        ],
        "otherDesign": [
          {
            "lang": "en",
            "value": "Cross-sectional prevalence study"
          }
        ],
        "followUpInfo": [
          {
            "lang": "en",
            "value": "General Information on Follow Up (profile and frequency)"
          }
        ],
        "recruitments": [
          "individuals",
          "other"
        ],
        "otherRecruitment": [
          {
            "lang": "en",
            "value": "Specific individuals"
          }
        ],
        "info": [
          {
            "lang": "en",
            "value": "Supplementary information about study design"
          }
        ]
      },
      "numberOfParticipants": {
        "participant": {
          "noLimit": false,
          "number": 50000
        },
        "sample": {
          "noLimit": false,
          "number": 30000
        }
      },
      "startYear": 2002,
      "access": [
        "data",
        "bio_samples",
        "other"
      ],
      "otherAccess": [
        {
          "lang": "en",
          "value": "Other access"
        }
      ],
      "markerPaper": "Raina PS, Wolfson C, Kirkland SA, Griffith LE, Oremus M, Patterson C, Tuokko H, Penning M, Balion CM, Hogan D, Wister A, Payette H, Shannon H, and Brazil K, The Canadian longitudinal study on aging (CLSA). Can J Aging, 2009. 28(3): p. 221-9.",
      "pubmedId": "19860977",
      "attachments": [
        {
          "fileName": "patate.frite",
          "type": "zip",
          "description": [
            {
              "lang": "en",
              "value": "This is an attachment"
            }
          ],
          "lang": "en",
          "size": 1000000,
          "md5": "7822fe77621b0b2c542215e599a3b511"
        }
      ],
      "populations": [
        {
          "id": "5362bcbae4b09be1985f144c",
          "name": [
            {
              "lang": "en",
              "value": "CLSA Population"
            }
          ],
          "description": [
            {
              "lang": "en",
              "value": "This is a population"
            }
          ],
          "recruitment": {
            "dataSources": [
              "questionnaires",
              "administratives_databases",
              "others"
            ],
            "generalPopulationSources": [
              "selected_samples"
            ],
            "specificPopulationSources": [
              "clinic_patients",
              "other"
            ],
            "otherSpecificPopulationSource": [
              {
                "lang": "en",
                "value": "Other specific population"
              }
            ],
            "studies": [
              {
                "localizedStrings": [
                  {
                    "lang": "en",
                    "value": "Canadian Community Health Survey (CCHS) – Healthy Aging"
                  }
                ]
              },
              {
                "localizedStrings": [
                  {
                    "lang": "en",
                    "value": "CARTaGENE"
                  }
                ]
              }
            ],
            "otherSource": [
              {
                "lang": "en",
                "value": "Other source of recruitment"
              }
            ]
          },
          "selectionCriteria": {
            "gender": "women",
            "ageMin": 45,
            "ageMax": 85,
            "countriesIso": [
              "CAN"
            ],
            "criteria": [
              "criteria1"
            ],
            "ethnicOrigin": [
              {
                "localizedStrings": [
                  {
                    "lang": "en",
                    "value": "Serbian"
                  }
                ]
              }
            ],
            "healthStatus": [
              {
                "localizedStrings": [
                  {
                    "lang": "en",
                    "value": "Good"
                  }
                ]
              }
            ],
            "otherCriteria": [
              {
                "lang": "en",
                "value": "<p>Language: Individuals who are able to respond in either French or English.</p>\n<p>Exclusion criteria: The CLSA uses the same exclusion criteria as the Statistics Canada Canadian Community Health Survey – Healthy Aging. Excluded from the study are:</p>\n<ul><li>Residents of the three territories</li>\n<li>Full-time members of the Canadian Forces</li>\n<li>Individuals living in long-term care institutions (i.e., those providing 24-hour nursing care). However, those living in households and transitional housing arrangements (e.g., seniors’ residences, in which only minimal care is provided) will be included. CLSA cohort participants who become institutionalized during the course of the study will continue to be followed either through personal or proxy interview.</li>\n<li>Persons living on reserves and other Aboriginal settlements. However, individuals who are of First Nations descent who live outside reserves are included in the study.</li>\n<li>Individuals with cognitive impairment at baseline</li>\n</ul>"
              }
            ]
          },
          "numberOfParticipants": {
            "participant": {
              "noLimit": false,
              "number": 50000
            },
            "sample": {
              "noLimit": false,
              "number": 30000
            }
          },
          "dataCollectionEvents": [
            {
              "id": "5362bcbae4b09be1985f144d",
              "name": [
                {
                  "lang": "en",
                  "value": "Baseline Recruitment"
                }
              ],
              "description": [
                {
                  "lang": "en",
                  "value": "Baseline data collection"
                }
              ],
              "startYear": 2010,
              "endYear": 2015,
              "dataSources": [
                "questionnaires",
                "physical_measures",
                "biological_samples"
              ],
              "administrativeDatabases": [
                "aDB1"
              ],
              "bioSamples": [
                "BioSamples.blood",
                "BioSamples.urine",
                "BioSamples.others"
              ],
              "otherBioSamples": [
                {
                  "lang": "en",
                  "value": "Other biological sample"
                }
              ]
            },
            {
              "id": "5362bcbae4b09be1985f144e",
              "name": [
                {
                  "lang": "en",
                  "value": "Follow-Up One"
                }
              ],
              "description": [
                {
                  "lang": "en",
                  "value": "First follow-up from baseline data collection"
                }
              ],
              "startYear": 2000,
              "startMonth": 1,
              "endYear": 2020,
              "endMonth": 12,
              "dataSources": [
                "questionnaires",
                "physical_measures",
                "administratives_databases",
                "others"
              ],
              "administrativeDatabases": [
                "aDB1",
                "aDB2"
              ],
              "otherDataSources": [
                {
                  "lang": "en",
                  "value": "Other data sources"
                }
              ],
              "bioSamples": [
                "Blood",
                "Cell Tissue"
              ],
              "tissueTypes": [
                {
                  "lang": "en",
                  "value": "Liver Tissue"
                }
              ],
              "otherBioSamples": [
                {
                  "lang": "en",
                  "value": "Ear wax"
                }
              ],
              "attachments": [
                {
                  "fileName": "patate.frite",
                  "type": "zip",
                  "description": [
                    {
                      "lang": "en",
                      "value": "This is an attachment"
                    }
                  ],
                  "lang": "en",
                  "size": 1000000,
                  "md5": "7822fe77621b0b2c542215e599a3b511"
                }
              ]
            }
          ]
        },
        {
          "dataCollectionEvents": [
            {
              "id": "5362bcbae4b09be1985f344d",
              "name": [
                {
                  "lang": "en",
                  "value": "Baseline Recruitment"
                }
              ],
              "description": [
                {
                  "lang": "en",
                  "value": "Baseline data collection"
                }
              ],
              "startYear": 2013,
              "endYear": 2015,
              "dataSources": [
                "questionnaires",
                "physical_measures",
                "biological_samples"
              ],
              "administrativeDatabases": [
                "aDB1"
              ],
              "bioSamples": [
                "BioSamples.blood",
                "BioSamples.urine",
                "BioSamples.others"
              ],
              "otherBioSamples": [
                {
                  "lang": "en",
                  "value": "Other biological sample"
                }
              ]
            },
            {
              "id": "5362bcbae4b09be1985f144e",
              "name": [
                {
                  "lang": "en",
                  "value": "Follow-Up One"
                }
              ],
              "description": [
                {
                  "lang": "en",
                  "value": "First follow-up from baseline data collection"
                }
              ],
              "startYear": 1997,
              "startMonth": 1,
              "endYear": 2000,
              "endMonth": 7,
              "dataSources": [
                "questionnaires",
                "physical_measures",
                "administratives_databases",
                "others"
              ],
              "administrativeDatabases": [
                "aDB1",
                "aDB2"
              ],
              "otherDataSources": [
                {
                  "lang": "en",
                  "value": "Other data sources"
                }
              ],
              "bioSamples": [
                "Blood",
                "Cell Tissue"
              ],
              "tissueTypes": [
                {
                  "lang": "en",
                  "value": "Liver Tissue"
                }
              ],
              "otherBioSamples": [
                {
                  "lang": "en",
                  "value": "Ear wax"
                }
              ],
              "attachments": [
                {
                  "fileName": "patate.frite",
                  "type": "zip",
                  "description": [
                    {
                      "lang": "en",
                      "value": "This is an attachment"
                    }
                  ],
                  "lang": "en",
                  "size": 1000000,
                  "md5": "7822fe77621b0b2c542215e599a3b511"
                }
              ]
            }
          ]
        }
      ]
    };
  }

}());


//"data": [
//  {
//    "population": {
//      id: "pop001",
//      title: "Adult Cohort (25 years and older)",
//      "color": "#9a3034",
//      "events": [
//        {
//          "id": "44413",
//          "title": "Baseline",
//          "starting_time": 6,
//          "ending_time": 33
//        },
//        {
//          "id": "44415",
//          "title": "Year 3 Follow-up",
//          "starting_time": 42,
//          "ending_time": 73
//        },
//        {
//          "id": "44418",
//          "title": "Year 10 Follow-up",
//          "starting_time": 128,
//          "ending_time": 160
//        },
//        {
//          "id": "44419",
//          "title": "Year 16 Follow-up",
//          "starting_time": 204,
//          "ending_time": 228
//        }
//      ]
//    }
//  },
//
//  {
//    "population": {
//      id: "pop002",
//      title: "Adult Cohort (25 years and older)",
//      "color": "#9a3034",
//      "events": [
//        {
//          "id": "44416",
//          "title": "Annual Follow-up",
//          "starting_time": 19,
//          "ending_time": 241
//        }
//      ]
//    }
//  },
//  {
//    "population": {
//      id: "pop003",
//      title: "Adult Cohort (25 years and older)",
//      "color": "#9a3034",
//      "events": [
//        {
//          "id": "44417",
//          "title": "Year 5 Follow-up",
//          "starting_time": 66,
//          "ending_time": 99
//        }
//      ]
//
//    }
//  },
//  {
//    "population": {
//      id: "pop004",
//      title: "Youth Cohort (16-24 years old)",
//      "color": "#886e6a",
//      "events": [
//        {
//          "id": "44414",
//          "title": "Baseline",
//          "starting_time": 114,
//          "ending_time": 138
//        },
//        {
//          "id": "44421",
//          "title": "Year 2 Follow-up",
//          "starting_time": 139,
//          "ending_time": 168
//        }
//      ]
//    }
//  },
//  {
//    "population": {
//      id: "pop004",
//      title: "Youth Cohort (16-24 years old)",
//      "color": "#886e6a",
//      "events": [
//        {
//          "id": "44420",
//          "title": "Year 1 Follow-up",
//          "starting_time": 128,
//          "ending_time": 158
//        }
//      ]
//    }
//  }
//],
//  "start": 1995,
//  "min": 0,
//  "max": 252
//};
