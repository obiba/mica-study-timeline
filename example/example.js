(function () {

  new $.MicaTimeline(new $.StudyDtoParser(), timelinePopupIdFormatter).create("#vis", getTestYearMonthDay()).addLegend();

  function timelinePopupIdFormatter(studyDto, datum,dceId) {
    console.log('Format a valid pop id.');
    return '';
  }

  function getTestDataNoEndYear() {
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
              "startMonth": 1
            }
          ]
        }
      ]
    }
  }
  function getTestDataNoPopulation() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:38:42.528-04:00"
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
      "published": false,
      "variables": 0,
      "obiba.mica.StudyStateDto.state": {
        "revisionsAhead": 1
      }
    }
  }
  function getTestDataNoDce() {
    return {
      "id": "test-toto",
      "timestamps": {
        "created": "2015-04-02T18:38:42.456-04:00",
        "lastUpdate": "2015-04-02T18:41:14.573-04:00"
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

          }
        }
      ]
    }
  }

  function getTestOrderedDceRendering() {
    return {
      "id": "3d",
      "name": [
        {
          "lang": "en",
          "value": "3D Study - Design, Develop, Discover"
        },
        {
          "lang": "fr",
          "value": "3D Study - Design, Develop, Discover"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "3D"
        },
        {
          "lang": "fr",
          "value": "3D"
        }
      ],
      "populations": [
        {
          "id": "1",
          "name": [
            {
              "lang": "en",
              "value": "3D - Mothers"
            }
          ],
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - Prenatal visit 1 (8 to 14 weeks)"
                }
              ],
              "startYear": 2010,
              "startMonth": 2,
              "endYear": 2012,
              "endMonth": 4,
              "weight": 0
            }
            ,
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - Prenatal visit 2 (20 to 24 weeks)"
                }
              ],
              "startYear": 2010,
              "startMonth": 5,
              "endYear": 2012,
              "endMonth": 11,
              "weight": 1
            },
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - Prenatal visit 3 (32 to 35 weeks)"
                }
              ],
              "startYear": 2010,
              "startMonth": 10,
              "endYear": 2013,
              "endMonth": 2,
              "weight": 2
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - Delivery and immediate postpartum"
                }
              ],
              "startYear": 2010,
              "startMonth": 11,
              "endYear": 2013,
              "endMonth": 3,
              "weight": 3
            },
            {
              "id": "6",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - 3 months postpartum"
                }
              ],
              "startYear": 2011,
              "startMonth": 3,
              "endYear": 2013,
              "endMonth": 7,
              "weight": 4
            },
            {
              "id": "7",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - 12 months postpartum"
                }
              ],
              "startYear": 2011,
              "startMonth": 12,
              "endYear": 2014,
              "endMonth": 3,
              "weight": 5
            },
            {
              "id": "8",
              "name": [
                {
                  "lang": "en",
                  "value": "3D - Mothers - 24 months postpartum"
                }
              ],
              "startDate": "2013-03-12",
              "startYear": 2013,
              "startMonth": 3,
              "endYear": 2015,
              "endMonth": 3,
              "weight": 6
            }
          ],
          "weight": 0
        }
      ],
      "studyResourcePath": "individual-study",
      "obiba.mica.CollectionStudyDto.type": {}
    };
  }

  function getTestYearMonthDay() {
    return {
      "id": "3d",
      "name": [
        {
          "lang": "en",
          "value": "3D Study - Design, Develop, Discover"
        },
        {
          "lang": "fr",
          "value": "3D Study - Design, Develop, Discover"
        }
      ],
      "acronym": [
        {
          "lang": "en",
          "value": "3D"
        },
        {
          "lang": "fr",
          "value": "3D"
        }
      ],
      "populations": [
        {
          "id": "1",
          "name": [
            {
              "lang": "en",
              "value": "3D - Mothers"
            }
          ],
          "dataCollectionEvents": [
            {
              "id": "1",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE01"
                }
              ],
              "startYear": 2010,
              "startMonth": 1,
              "startDay": "2010-01-01",
              "endYear": 2010,
              "endMonth": 1,
              "endDay": "2010-01-16",
              "weight": 0
            }
            ,
            {
              "id": "2",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE02"
                }
              ],
              "startYear": 2010,
              "startMonth": 1,
              "startDay": "2010-01-16",
              "endYear": 2010,
              "endMonth": 1,
              "endDay": "2010-02-01",
              "weight": 1
            }
            ,
            {
              "id": "3",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE03"
                }
              ],
              "startYear": 2010,
              "startMonth": 2,
              "startDay": "2010-02-01",
              "endYear": 2010,
              "endMonth": 2,
              "endDay": "2010-02-14",
              "weight": 2
            },
            {
              "id": "4",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE04"
                }
              ],
              "startYear": 2010,
              "startMonth": 2,
              "startDay": "2010-02-14",
              "endYear": 2010,
              "endMonth": 2,
              "weight": 3
            },
            {
              "id": "5",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE05"
                }
              ],
              "startYear": 2010,
              "startMonth": 2,
              "startDay": "2010-02-28",
              "endYear": 2010,
              "endMonth": 2,
              "endDay": "2010-03-16",
              "weight": 3
            },
            {
              "id": "6",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE05"
                }
              ],
              "startYear": 2010,
              "startMonth": 2,
              "endYear": 2011,
              "endMonth": 2,
              "weight": 3
            },
            {
              "id": "6",
              "name": [
                {
                  "lang": "en",
                  "value": "DCE05"
                }
              ],
              "startYear": 2011,
              "startMonth": 3,
              "endYear": 2011,
              "endMonth": 6,
              "weight": 3
            }
          ],
          "weight": 0
        }
      ],
      "studyResourcePath": "individual-study",
      "obiba.mica.CollectionStudyDto.type": {}
    };
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
      ]
      ,
      "populations": [
        {
          "id": "999bcbae4b09be1985f144c",
          "name": [
            {
              "lang": "en",
              "value": "CSC Population"
            }
          ],
          "dataCollectionEvents": [
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
              "startYear": 1990,
              "startMonth": 1,
              "endYear": 2018,
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
            },
            {
              "id": "5362bcbae4b09be1985f1499",
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
              "startYear": 1998,
              "startMonth": 1,
              "endYear": 2001,
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
            },
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
            }
          ]
        },
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
            },
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
            }
          ]
        },
        {
          "id": "4462bcbae4b09be1985f144c",
          "name": [
            {
              "lang": "en",
              "value": "CHINA Population"
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
            },
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
            }
          ]
        }
      ]
    };
  }

  function getTestDataPartialDces() {
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
      ]
      ,
      "populations": [
        {
          "id": "999bcbae4b09be1985f144c",
          "name": [
            {
              "lang": "en",
              "value": "CSC Population"
            }
          ],
          "dataCollectionEvents": [
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
              "startYear": 1990,
              "startMonth": 1,
              "endYear": 2018,
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
            },
            {
              "id": "5362bcbae4b09be1985f1499",
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
              "startYear": 1998,
              "startMonth": 1,
              "endYear": 2001,
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
            },
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
            }
          ]
        },
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
            },
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
            }
          ]
        },
        {
          "id": "4462bcbae4b09be1985f144c",
          "name": [
            {
              "lang": "en",
              "value": "CHINA Population"
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
            },
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
            }
          ]
        }
      ]
    };
  }

}());
