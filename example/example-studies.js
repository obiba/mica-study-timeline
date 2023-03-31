(function () {

  new $.MicaTimeline(new $.StudiesDtoParser(), timelinePopupIdFormatter).create("#vis", getStudies());

  function timelinePopupIdFormatter(studyDto, datum, dceId) {
    console.log('Format a valid pop id.');
    return '';
  }

  function getStudies() {
    return [
      {
        "id": "ejnq",
        "timestamps": {
          "created": "2019-07-23T18:12:57.757Z",
          "lastUpdate": "2021-04-30T19:57:50.560Z"
        },
        "name": [
          {
            "lang": "en",
            "value": "Quebec Newborn Twin Study"
          },
          {
            "lang": "fr",
            "value": "Quebec Newborn Twin Study"
          }
        ],
        "acronym": [
          {
            "lang": "en",
            "value": "QNTS"
          },
          {
            "lang": "fr",
            "value": "QNTS"
          }
        ],
        "design": "cohort_study",
        "targetNumber": {
          "noLimit": false,
          "number": 1410
        },
        "countries": [
          "CAN"
        ],
        "objectives": [
          {
            "lang": "en",
            "value": "The goals of the Quebec Newborn Twin Study (QNTS) are to document individual differences in the cognitive, behavioral, social-emotional aspects of developmental health across childhood, their early biosocial, i.e., genetic and environmental, determinants, as well as their putative role in later social-emotional adjustment, school and health outcomes."
          },
          {
            "lang": "fr",
            "value": "to be completed"
          }
        ],
        "dataSources": [
          "questionnaires",
          "physical_measures",
          "biological_samples",
          "cognitive_measures"
        ],
        "populationSummaries": [
          {
            "id": "1",
            "name": [
              {
                "lang": "en",
                "value": "QNTS - Twins born between 1995-1998"
              },
              {
                "lang": "fr",
                "value": "QNTS - Twins born between 1995-1998"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 5 months"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - 5 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A sub-group of the families of twins was seen in the lab where extensive psycho-physiological, hormonal, and behavioral measures were taken. Behavior observations were conducted in a controlled setting and cortisol samples were collected. The other subgroup was only seen at home.</p>\n<p>The laboratory assessments were followed within 2 weeks by a home visit to obtain exhaustive social, demographic, health, and further behavioral data on the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p>\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"description\":{\"en\":\"<p>A sub-group of the families of twins was seen in the lab where extensive psycho-physiological, hormonal, and behavioral measures were taken. Behavior observations were conducted in a controlled setting and cortisol samples were collected. The other subgroup was only seen at home.</p>\\n<p>The laboratory assessments were followed within 2 weeks by a home visit to obtain exhaustive social, demographic, health, and further behavioral data on the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p>\\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\",\"biological_samples\"]}",
                "start": "1996-06",
                "end": "1998-11"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 18 months"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - 18 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Families seen in the lab at 6 months were again seen in the lab and at home and families seen only at home at 6 months were seen only at home.</p> \n<p>In the lab, extensive psycho-physiological, hormonal, and behavioral measures were taken. Behavior observations were conducted in a controlled setting and cortisol samples were collected. </p>\n<p>The laboratory assessments were followed within 2 weeks by a home visit to obtain exhaustive social, demographic, health, and further behavioral data on the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p>\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"description\":{\"en\":\"<p>Families seen in the lab at 6 months were again seen in the lab and at home and families seen only at home at 6 months were seen only at home.</p> \\n<p>In the lab, extensive psycho-physiological, hormonal, and behavioral measures were taken. Behavior observations were conducted in a controlled setting and cortisol samples were collected. </p>\\n<p>The laboratory assessments were followed within 2 weeks by a home visit to obtain exhaustive social, demographic, health, and further behavioral data on the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p>\\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\",\"biological_samples\"]}",
                "start": "1997-07",
                "end": "2000-01"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 30 months"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - 30 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>During the home visit, data was collected about social, demographic, health, and further behavioral characteristics of the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>During the home visit, data was collected about social, demographic, health, and further behavioral characteristics of the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "1998-07",
                "end": "2001-01"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 48 months"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - 48 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>During the home visit, data was collected about social, demographic, health, and further behavioral characteristics of the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. Finally, direct and multi-faceted assessments of cognitive development were performed.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>During the home visit, data was collected about social, demographic, health, and further behavioral characteristics of the twins and their families, mainly through interviews of both parents, self-report questionnaires filled out by both parents, and direct observation of the infant, home and neighborhood by the interviewer. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. Finally, direct and multi-faceted assessments of cognitive development were performed.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2000-01",
                "end": "2002-07"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 60 months"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - 60 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected during a lab visit in the summer for a battery of cognitive measures. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed. Cortisol samples were also collected.</p>\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"description\":{\"en\":\"<p>Data was collected during a lab visit in the summer for a battery of cognitive measures. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed. Cortisol samples were also collected.</p>\\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"biological_samples\"]}",
                "start": "2001-06",
                "end": "2003-08"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Kindergarten"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Kindergarten"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments and classroom sociometric interviews. Cortisol samples were also collected. </p>\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments and classroom sociometric interviews. Cortisol samples were also collected. </p>\\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"biological_samples\"]}",
                "start": "2001-09",
                "end": "2004-06"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Grade 1"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Grade 1"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> \n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development, with a strong emphasis on school readiness were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> \\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2002-09",
                "end": "2005-06"
              },
              {
                "id": "16",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 100 months"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p> Information about health, parenting and behaviour was collected through questionnaires and semi-structured interviews. </p><p>Intelligence was assessed using the Wechsler Intelligence Scale for Children.  Also, symptoms of inattention, impulsiveness, and hyperactivity were assessed through a battery of different neuropsychological tests, including a mixed go/no-go and stop task (measuring both restrain and cancellation in a single paradigm), continuous performance task (oddball), and a visuospatial working memory task.  </p> <p>Brain electrical activity was also recorded using a large array of electrodes (electroencephalography/event-related potential (EEG/ERP)) during these tests, and brain anatomical magnetic resonance imaging data was collected. </p> <p>Blood and saliva samples were collected for the genotyping of parents and twins. </p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\",\"saliva\"],\"otherDataSources\":{},\"tissueTypes\":{},\"description\":{\"en\":\"<p>Twins’ self-efficacy beliefs, behavioral, social, psychological and academic/work-related adjustment, substance use and gambling habits as well as their perceived social support were assessed through an online questionnaire.</p> <p>Blood spots, saliva, buccal cells and hair were collected along with data on their general health, sleeping habits and perception of pain.</p>\"},\"otherBioSamples\":{},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"biological_samples\"]}",
                "start": "2004-04",
                "end": "2006-04"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Grade 3"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Grade 3"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected from teacher ratings and children’s school achievement.</p>\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. Finally, direct and multi-faceted assessments of cognitive development were performed.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected from teacher ratings and children’s school achievement.</p>\\n<p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. Finally, direct and multi-faceted assessments of cognitive development were performed.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2004-09",
                "end": "2007-06"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Grade 4"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Grade 4"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2005-09",
                "end": "2008-06"
              },
              {
                "id": "10",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Grade 6"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Grade 6"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. </p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2007-09",
                "end": "2010-06"
              },
              {
                "id": "11",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Secondary 1"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Secondary 1"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2008-09",
                "end": "2011-06"
              },
              {
                "id": "12",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Secondary 2"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Secondary 2"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment. Cortisol samples were also collected.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment. Cortisol samples were also collected.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"biological_samples\"]}",
                "start": "2009-09",
                "end": "2012-06"
              },
              {
                "id": "13",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Secondary 3"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Secondary 3"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2010-09",
                "end": "2013-06"
              },
              {
                "id": "14",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - Secondary 5"
                  },
                  {
                    "lang": "fr",
                    "value": "QNTS - Secondary 5"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>Data was collected using school-based assessments including behavioral observations which were conducted in a controlled setting, cognitive assessments, and peer and teacher assessments. Direct and multi-faceted assessments of cognitive development were performed as well. In addition, peer relationships and experiences were measured through peers’ assessments, classroom sociometric interviews and school achievement. In secondary school, the self-ratings also covered substance use, gambling, peer relationships, and psychological adjustment.</p> <p>Parenting behaviors were assessed yearly, through mother and father self-reports of parental warmth, self-efﬁcacy and impact, overprotection, and hostile-reactive behavior. Social behaviors are also assessed yearly using a variant of the Child Social Behaviour Questionnaire. Also, some of the measures of the children’s environment collected regularly were about nutrition, the mental health status of parents, marital satisfaction and status, as well as a variety of socio-economic and demographic characteristics. </p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2012-09",
                "end": "2015-06"
              },
              {
                "id": "15",
                "name": [
                  {
                    "lang": "en",
                    "value": "QNTS - 19 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Twins’ self-efficacy beliefs, behavioral, social, psychological and academic/work-related adjustment, substance use and gambling habits as well as their perceived social support were assessed through an online questionnaire.</p> <p>Blood spots, saliva, buccal cells and hair were collected along with data on their general health, sleeping habits and perception of pain.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\",\"saliva\",\"hair\",\"buccal_cells\"],\"otherDataSources\":{},\"tissueTypes\":{},\"description\":{\"en\":\"<p>Twins’ self-efficacy beliefs, behavioral, social, psychological and academic/work-related adjustment, substance use and gambling habits as well as their perceived social support were assessed through an online questionnaire.</p> <p>Blood spots, saliva, buccal cells and hair were collected along with data on their general health, sleeping habits and perception of pain.</p>\"},\"otherBioSamples\":{},\"dataSources\":[\"questionnaires\",\"biological_samples\"]}",
                "start": "2016-05",
                "end": "2018-02"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of twins born between 1995 and 1998 in the greater Montreal area and their parents."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":1410},\"sample\":{\"noLimit\":false,\"number\":1043},\"info\":{\"en\":\"<p>5 months: 662 families<br>18 months: 566 families<br>30 months: 524 families<br>48 months: 442 families<br>60 months: 446 families<br>Kindergarten: 402 families<br>Grade 1: 476 families<br>100 months: 375 families (Genotyping), 150 pairs (Neuropsychological assessments)<br>Grade 3: 393 families<br>Grade 4: 444 families<br>Grade 6: 406 families<br>Secondary 1: 410 families<br>Secondary 2: 404 families<br>Secondary 3: 403 families<br>Secondary 5: 381 families</p><p>Biological samples: 562 twins and 481 parents</p>\"}},\"selectionCriteria\":{\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Greater Montreal area\"},\"twins\":true,\"newborn\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"],\"info\":{\"en\":\"Recruitment began using the Quebec Newborn Twin Registry to identify all twin births in Quebec between April 1995 and December 1998. Names, addresses, and phone numbers of all the mothers of newborn twins were collected from the computerized birth records of the Quebec Bureau of Statistics.\"}}}"
          }
        ],
        "published": true,
        "variables": 12501,
        "permissions": {
          "view": false,
          "edit": false,
          "delete": false,
          "publish": false
        },
        "studyResourcePath": "individual-study",
        "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":1410},\"sample\":{\"noLimit\":false,\"number\":1043},\"info\":{\"en\":\"Families: 705 (662 recruited at 5 months and 43 recruited during High School)<br>Biological samples: 562 twins and 481 parents\"}},\"website\":\"http://www.gripinfo.ca/grip/consultation/etudes/infogen.asp?langue=en&ts=1472501924824&id_etude=9#L5\",\"access\":{\"access_bio_samples\":\"no\",\"access_data\":\"yes\",\"access_other\":\"na\"},\"maelstromAuthorization\":{\"authorized\":true,\"authorizer\":\"Michel Boivin\"},\"methods\":{\"designs\":[\"cohort_study\"],\"design\":\"cohort_study\",\"followUpInfo\":{\"en\":\"Participants were assessed 16 times; at 5, 20, 32, 50 and 60 months, in kindergarten, 100 months, grade 1, 3, 4 and 6, in secondary 1, 2, 3 and 5, and at 19 years of age.\"},\"recruitments\":[\"families\"],\"otherDesign\":{},\"otherRecruitment\":{},\"info\":{}},\"startYear\":1995,\"specificAuthorization\":{\"authorized\":true,\"authorizer\":\"Michel Boivin\"},\"markerPaper\":\"Boivin M, Brendgen M, Dionne G, Dubois L, Pérusse D, Robaey P, Tremblay RE, Vitaro F. 2013. The Quebec Newborn Twin Study into adolescence: 15 years later; 16(1): 64-9.\",\"pubmedId\":\"23200437\",\"memberships\":{\"investigator\":[{\"person\":{\"id\":\"57c49df8e4b099280256e716\",\"title\":\"Dr.\",\"firstName\":\"Michel\",\"lastName\":\"Boivin\",\"email\":\"michel.boivin@psy.ulaval.ca\",\"phone\":\"418 656-2131, ext. 2825\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université Laval\"},\"department\":{\"en\":\"School of Psychology\"},\"address\":{\"city\":{\"en\":\"Quebec\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"ejnq\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Michel Boivin\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"57c990a8e4b099280256e760\",\"title\":\"Dr.\",\"firstName\":\"Mara\",\"lastName\":\"Brendgen\",\"email\":\"brendgen.mara@uqam.ca\",\"phone\":\"(514) 987-3000 ext. 7602\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université du Québec à Montréal\"},\"department\":{\"en\":\"Department of Psychology\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"ejnq\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Mara Brendgen\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"57c9947ee4b099280256e761\",\"title\":\"Dr.\",\"firstName\":\"Ginette\",\"lastName\":\"Dionne\",\"email\":\"Ginette.Dionne@psy.ulaval.ca\",\"phone\":\"418 656-2131, ext. 4049\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université Laval\"},\"department\":{\"en\":\"School of Psychology\"},\"address\":{\"city\":{\"en\":\"Quebec\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"ejnq\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Ginette Dionne\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549163e4b0107838869461\",\"title\":\"Dr.\",\"firstName\":\"Frank\",\"lastName\":\"Vitaro\",\"email\":\"frank.vitaro@umontreal.ca\",\"phone\":\"514-343-6111 ext 2569\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"School of Psychoeducation\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"},{\"parentId\":\"ejnq\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Frank Vitaro\"},\"role\":\"investigator\"}],\"contact\":[{\"person\":{\"id\":\"579a270ce4b0895da53feb1b\",\"firstName\":\"Katja\",\"lastName\":\"Valois\",\"email\":\"katja.valois@recherche-ste-justine.qc.ca\",\"phone\":\"(514) 345-2182\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"Centre de recherche du CHU Sainte-Justine\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"emigarde\",\"role\":\"contact\"},{\"parentId\":\"ejnq\",\"role\":\"contact\"}],\"networkMemberships\":[],\"fullName\":\"Katja Valois\"},\"role\":\"contact\"}]},\"access_fees\":true,\"access_restrictions\":true,\"access_info_location\":[\"study_representative\"],\"access_info_representative\":{\"name\":\"Qian Xu\",\"title\":\"Data Management Coordinator\",\"institution\":\"Universite de Montreal - CHU Sainte-Justine\",\"email\":\"qian.xu@umontreal.ca\",\"telephone\":\"(514) 345-4931 #4073\"},\"access_permission_data\":{\"public_sector\":\"yes\",\"private_sector\":\"no\",\"not_for_profit_organization\":\"no\"},\"access_permission_biological_samples\":{\"public_sector\":\"no\",\"private_sector\":\"no\",\"not_for_profit_organization\":\"no\"},\"access_data_can_leave\":{\"study_facility\":\"yes\",\"country\":\"yes\"},\"access_biological_samples_can_leave\":{\"study_facility\":\"no\",\"country\":\"no\"},\"access_special_conditions_to_leave\":{\"en\":\"coding\"},\"access_data_sharing_cost\":{\"data\":\"variable_cost\",\"biological_samples\":\"nyd\"},\"access_cost_reduction_consideration\":{\"data\":\"yes\",\"bio_samples\":\"na\"},\"access_supplementary_info\":{\"en\":\"More information regarding data access is available on our website : http://www.gripinfo.ca/grip/public/www/Etudes/en/dadprocedures.asp\"}}"
      },
      {
        "id": "emigarde",
        "timestamps": {
          "created": "2019-07-23T18:12:59.998Z",
          "lastUpdate": "2021-08-03T08:18:43.280Z"
        },
        "name": [
          {
            "lang": "en",
            "value": "Life experiences and psychosocial development of the child: the role and quality of child care services"
          },
          {
            "lang": "fr",
            "value": "Emigarde"
          }
        ],
        "acronym": [
          {
            "lang": "en",
            "value": "EMIGARDE"
          },
          {
            "lang": "fr",
            "value": "Emigarde"
          }
        ],
        "design": "cohort_study",
        "targetNumber": {
          "noLimit": false,
          "number": 1030
        },
        "countries": [
          "CAN"
        ],
        "objectives": [
          {
            "lang": "en",
            "value": "The main objective of the EMIGARDE study is to characterize the role of early life experiences in the success of children. More specifically, it sought to determine the associations between child care quality (when children are between 2 and 4 years) and children’s pre academic skills at 4 years. To do so, specific aims of the EMIGARDE study are: <ul>\n<li>To examine the extent to which patterns of change in child care quality over time predicted the child cognitive performance;</li>\n<li>To examine whether or not distinct dimensions of quality were particularly relevant to cognitive performance.</li></ul>"
          },
          {
            "lang": "fr",
            "value": "to be completed"
          }
        ],
        "dataSources": [
          "questionnaires",
          "physical_measures",
          "cognitive_measures",
          "biological_samples"
        ],
        "populationSummaries": [
          {
            "id": "1",
            "name": [
              {
                "lang": "en",
                "value": "EMIGARDE - Mothers"
              },
              {
                "lang": "fr",
                "value": "EMIGARDE - Mothers"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - Birth"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - Birth"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected on birth weight of the child, prematurity of the child and maternal smoking during pregnancy."
                  }
                ],
                "content": "{\"description\":{\"en\":\"Information was collected on birth weight of the child, prematurity of the child and maternal smoking during pregnancy.\"},\"dataSources\":[\"questionnaires\",\"physical_measures\"]}",
                "start": "2003-06",
                "end": "2004-04"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 2 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 2 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 2 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>When the children were 2 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\\n<p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>\"},\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2005-10",
                "end": "2006-07"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 3 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 3 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 3 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>When the children were 3 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\\n<p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>\"},\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2006-10",
                "end": "2007-07"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 4 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 4 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 4 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>\n<p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R) and The Lollipop Test were used.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>When the children were 4 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p>\\n<p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\\n<p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p>\\n<p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R) and The Lollipop Test were used.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2007-11",
                "end": "2008-09"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 5-6 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 5-6 years old, parental interviews (mostly with mothers) were conducted.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R), The Lollipop Test, The Block Design (WISC-III), The ROST (Random Object Span Test) and the Memory Game (VCR) were used.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2009-06",
                "end": "2011-06"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 7-8 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 7-8 years old, parental interviews (mostly with mothers) were conducted.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Information was collected on early life experiences, childcare over the preschool years and children’s emotional development. This data collection included detailed measures of emotional development of children such as through self-reported emotions and behaviours (using the Berkeley Puppet Interview) as well as teacher and parent reports, in addition to various tasks of emotion-processing (facial expression recognition). </p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2011-06",
                "end": "2012-08"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The participants are mothers of a child born between June 2003 and April 2004 and having taken part in a prenatal-perinatal study conducted in four Montreal maternity hospitals."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":515},\"info\":{\"en\":\"2 years: 515 participants<br>3 years: 423 participants<br>4 years: 395 participants<br>5-6 years: 294 participants<br>7-8 years: 327 participants\"},\"sample\":{\"noLimit\":false}},\"selectionCriteria\":{\"gender\":\"women\",\"ageMin\":18,\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Quebec province, Montreal\"},\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"exist_studies\"],\"studies\":[{\"en\":\"Montreal Prematurity Study and SAGE study\"}]}}"
          },
          {
            "id": "2",
            "name": [
              {
                "lang": "en",
                "value": "EMIGARDE - Children"
              },
              {
                "lang": "fr",
                "value": "EMIGARDE - Children"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - Birth"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - Birth"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected on birth weight of the child, prematurity of the child and maternal smoking during pregnancy."
                  }
                ],
                "content": "{\"description\":{\"en\":\"Information was collected on birth weight of the child, prematurity of the child and maternal smoking during pregnancy.\"},\"dataSources\":[\"questionnaires\",\"physical_measures\"]}",
                "start": "2003-06",
                "end": "2004-04"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 2 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 2 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 2 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p><p>A saliva sample was also collected.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"saliva\"],\"description\":{\"en\":\"<p>When the children were 2 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p><p>A saliva sample was also collected.</p>\"},\"dataSources\":[\"questionnaires\",\"biological_samples\"]}",
                "start": "2005-10",
                "end": "2006-07"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 3 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 3 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 3 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p><p>A saliva sample was also collected.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"saliva\"],\"description\":{\"en\":\"<p>When the children were 3 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p><p>A saliva sample was also collected.</p>\"},\"dataSources\":[\"questionnaires\",\"biological_samples\"]}",
                "start": "2006-10",
                "end": "2007-07"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 4 years"
                  },
                  {
                    "lang": "fr",
                    "value": "EMIGARDE - 4 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 4 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p> <p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R) and The Lollipop Test were used.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>When the children were 4 years old, parental interviews (mostly with mothers) were conducted and child care quality assessments were done.</p> <p>Parental interviews provide information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Participating child care services (attended regularly by children) received a visit. Center-based child care quality was assessed with the ECERS–R for children 2½–4 years and with the ITERS–R for children under 2½ years. Family-based child care quality was assessed with the FDCRS.</p> <p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R) and The Lollipop Test were used.</p>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"bioSamples\":[]}",
                "start": "2007-11",
                "end": "2008-09"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 5-6 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 5-6 years old, parental interviews (mostly with mothers) were conducted.</p>\n<p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p>\n<p>Moreover, a home visit was conducted, including cognitive tasks to assess school readiness, receptive vocabulary, and numeracy-related abilities. The Number Knowledge Task (NKT), The Peabody Picture Vocabulary Test–Revised (PPVT–R), The Lollipop Test, The Block Design (WISC-III), The ROST (Random Object Span Test) and the Memory Game (VCR) were used.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2009-06",
                "end": "2011-06"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 7-8 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the children were 7-8 years old, parental interviews (mostly with mothers) were conducted.</p> <p>Parental interviews provided information regarding the family characteristics (socio-demographics of both parents, maternal depression) and the child characteristics. Lifetime maternal depression was assessed with a modified life-time depression section of the Diagnostic Interview Schedule.</p> <p>Information was collected on early life experiences, childcare over the preschool years and children’s emotional development. This data collection included detailed measures of emotional development of children such as through self-reported emotions and behaviours (using the Berkeley Puppet Interview) as well as teacher and parent reports, in addition to various tasks of emotion-processing (facial expression recognition). </p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2011-06",
                "end": "2012-08"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 12-14 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The main objective of these two new data collections is to study children's social, emotional and socio-cognitive functioning in the early adolescent years with a special focus on adolescents' social media use and how this relates to social, emotional and socio-cognitive functioning.</p>\n<p>Several online questionnaires collected information pertaining to social media use, emotional and behavioural difficulties, personality, and friendships. Additionally, tasks of emotion-processing (facial expression recognition) as well as socio-moral reasoning are included.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2017-04",
                "end": "2019-04"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "EMIGARDE - 13-15 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The main objective of these two new data collections is to study children's social, emotional and socio-cognitive functioning in the early adolescent years with a special focus on adolescents' social media use and how this relates to social, emotional and socio-cognitive functioning.</p>\n<p>Several online questionnaires collected information pertaining to social media use, emotional and behavioural difficulties, personality, and friendships. Additionally, tasks of emotion-processing (facial expression recognition) as well as socio-moral reasoning are included.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"]}",
                "start": "2018-04",
                "end": "2020-04"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The participants are children born between June 2003 and April 2004 and having taken part in a prenatal-perinatal study conducted in four Montreal maternity hospitals."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":515},\"sample\":{\"noLimit\":false,\"number\":157},\"info\":{\"en\":\"2 years: 515 participants (saliva: 157 participants)<br>3 years: 423 participants (saliva: 121 participants)<br>4 years: 395 participants<br>5-6 years: 316 participants<br>7-8 years: 339 participants\"}},\"selectionCriteria\":{\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Quebec province, Montreal\"},\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"exist_studies\"],\"studies\":[{\"en\":\"Montreal Prematurity Study and SAGE study\"}]}}"
          }
        ],
        "published": true,
        "variables": 7273,
        "permissions": {
          "view": false,
          "edit": false,
          "delete": false,
          "publish": false
        },
        "studyResourcePath": "individual-study",
        "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":1030},\"sample\":{\"noLimit\":false,\"number\":157},\"info\":{\"en\":\"Mothers: 515 participants<br>Children: 515 participants\"}},\"website\":\"\",\"access\":{\"access_bio_samples\":\"no\",\"access_data\":\"yes\",\"access_other\":\"na\"},\"otherAccess\":{},\"maelstromAuthorization\":{\"authorized\":true,\"authorizer\":\"Sylvana Côté\",\"date\":\"2017-05-29\"},\"methods\":{\"designs\":[\"cohort_study\"],\"design\":\"cohort_study\",\"otherDesign\":{},\"followUpInfo\":{\"en\":\"Prior to the children’s second birthday, families were invited to participate in the EMIGARDE study. Participants were followed-up when children were 3, 4, 5-6, 7-8, 12-14 and 13-15 years old. Child care services regularly attended by the children also received a visit when the child was 2, 3, and 4 years old.\"},\"recruitments\":[\"families\"],\"otherRecruitment\":{},\"info\":{}},\"startYear\":2003,\"specificAuthorization\":{\"authorized\":true,\"date\":\"2017-05-29\",\"authorizer\":\"Sylvana Côté\"},\"markerPaper\":\"Côté SM, Mongeau C, Japel C, Xu Q, Séguin JR, Tremblay RE. 2013. Child care quality and cognitive development: Trajectories leading to better preacademic skills. Child Development, 84(2), 752-766.\",\"pubmedId\":\"23083205\",\"memberships\":{\"investigator\":[{\"person\":{\"id\":\"579a2641e4b0895da53feb1a\",\"title\":\"Dr.\",\"firstName\":\"Sylvana\",\"lastName\":\"Côté\",\"email\":\"sylvana.cote.1@umontreal.ca\",\"phone\":\"514 343-6963\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"École de santé publique\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"emigarde\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Sylvana Côté\"},\"role\":\"investigator\"}],\"contact\":[{\"person\":{\"id\":\"579a270ce4b0895da53feb1b\",\"firstName\":\"Katja\",\"lastName\":\"Valois\",\"email\":\"katja.valois@recherche-ste-justine.qc.ca\",\"phone\":\"(514) 345-2182\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"Centre de recherche du CHU Sainte-Justine\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"emigarde\",\"role\":\"contact\"},{\"parentId\":\"ejnq\",\"role\":\"contact\"}],\"networkMemberships\":[],\"fullName\":\"Katja Valois\"},\"role\":\"contact\"}]},\"access_fees\":true,\"access_restrictions\":true,\"access_info_location\":[\"study_representative\"],\"access_info_representative\":{\"name\":\"Qian Xu\",\"title\":\"Data Management Coordinator\",\"institution\":\"UdeM – CHU Sainte-Justine\",\"email\":\"qian.xu@umontreal.ca\",\"telephone\":\"(514) 345-4931 #4073\"},\"access_permission_data\":{\"public_sector\":\"yes\",\"private_sector\":\"no\",\"not_for_profit_organization\":\"no\"},\"access_permission_biological_samples\":{\"public_sector\":\"na\",\"not_for_profit_organization\":\"na\",\"private_sector\":\"na\"},\"access_data_can_leave\":{\"study_facility\":\"yes\",\"country\":\"yes\"},\"access_biological_samples_can_leave\":{\"study_facility\":\"na\",\"country\":\"na\"},\"access_special_conditions_to_leave\":{\"en\":\"Coding\"},\"access_data_sharing_cost\":{\"data\":\"variable_cost\",\"biological_samples\":\"na\"},\"access_cost_reduction_consideration\":{\"data\":\"yes\",\"bio_samples\":\"na\"},\"access_supplementary_info\":{\"en\":\"More information regarding data access is available on our website: http://www.gripinfo.ca/grip/public/www/Etudes/en/dadprocedures.asp\"}}"
      },
      {
        "id": "qlscd",
        "timestamps": {
          "created": "2019-07-23T18:14:57.235Z",
          "lastUpdate": "2022-03-09T20:38:14.409Z"
        },
        "name": [
          {
            "lang": "en",
            "value": "Québec Longitudinal Study of Child Development"
          }
        ],
        "acronym": [
          {
            "lang": "en",
            "value": "QLSCD"
          }
        ],
        "design": "cohort_study",
        "targetNumber": {
          "noLimit": false,
          "number": 7641
        },
        "countries": [
          "CAN"
        ],
        "logo": {
          "id": "61dcc508c0ac486856193e80",
          "fileName": "qlscd.png",
          "lang": "en",
          "size": 174032,
          "md5": "92e1bc71c45f8a2e20ee39f49deeb38f",
          "timestamps": {
            "created": "2022-01-10T23:45:13.218Z"
          }
        },
        "objectives": [
          {
            "lang": "en",
            "value": "The Quebec Longitudinal Study of Child Development (QLSCD) was set up in the end of the 1990s. About 20 years later, a second study was set up.\n\nThe general objective of the QLSCD 1st edition - Cohort 1996 (*In 2001, I was 5 years old*) is to better understand the link between the development of the child and their adaptation upon entering school.\n\nThe initial main objective of the QLSCD 1st edition - Cohort 1998 (1998-2015, *I am, I'll be*) was to identify factors that, coming into play during early childhood, affect the social adjustment and academic performance of young Quebecers.\nThe revised main objective (2017-2023) is to gain a better understanding of the factors that, when implemented at different stages in life, are linked to the overall well-being of young adults in Québec.\n\nThe main objective of QLSCD 2nd edition - Cohort 2018 and Cohort 2020-2021 (*Growing Up in Québec*) is to identify the developmental trajectories and factors that contribute to the well-being of young people born in Quebec. Some of its sub-objectives are:\n* To study the factors that predict the adoption of healthy lifestyles and optimal health;\n* To identify the predictors of school perseverance and success;\n* To identify the process that promote social adaptation;\n* To identify factors associated with social mobility; and \n* To study the process that leads to successful socio-professional integration.</p>\n"
          }
        ],
        "dataSources": [
          "questionnaires",
          "cognitive_measures",
          "others",
          "physical_measures",
          "administratives_databases",
          "biological_samples"
        ],
        "populationSummaries": [
          {
            "id": "2",
            "name": [
              {
                "lang": "en",
                "value": "QLSCD 1 - Cohort 1996"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 1996"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, nutrition and breastfeeding, diet, sleep, temperament and behavior. Neighborhood observation and home environment inventory information was also collected.\n\nCognitive measures were performed.\n\nInformation was documented about health problems and the care received, from medical files from pregnancy to the birth of the child. The vaccination record was also accessed for data. Different facets of mother and child interaction as well as assessment of the mental-attentional capacity were measured through video recordings.\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"otherDataSources\":{\"en\":\"Medical files, vaccination record, observation videos\"},\"showFullDate\":false}",
                "start": "1996-10-01",
                "end": "1997-09-30"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 1997"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, nutrition and breastfeeding, diet, sleep, temperament and behavior. Neighborhood observation and home environment inventory information was also collected.\n\nCognitive measures were performed.\n\nInformation was documented about health problems and the care received, from medical files from pregnancy to the birth of the child. The vaccination record was also accessed for data. Different facets of mother and child interaction as well as assessment of the mental-attentional capacity were measured through video recordings.\n\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"otherDataSources\":{\"en\":\"Medical files, vaccination record, observation videos\"},\"showFullDate\":false}",
                "start": "1997-10-01",
                "end": "1998-09-30"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 1998"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, nutrition and breastfeeding, diet, sleep, temperament and behavior. Neighborhood observation and home environment inventory information was also collected.\n\nCognitive measures were performed.\n\nInformation was documented about health problems and the care received, from medical files from pregnancy to the birth of the child. The vaccination record was also accessed for data. Different facets of mother and child interaction as well as assessment of the mental-attentional capacity were measured through video recordings.\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"otherDataSources\":{\"en\":\"Medical files, vaccination record, observation videos\"},\"showFullDate\":false}",
                "start": "1998-11-01",
                "end": "1999-10-31"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 1999"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, nutrition and breastfeeding, diet, sleep, temperament and behavior. Neighborhood observation and home environment inventory information was also collected.\n\nCognitive measures were performed.\n\nInformation was documented about health problems and the care received, from medical files from pregnancy to the birth of the child. The vaccination record was also accessed for data. Different facets of mother and child interaction as well as assessment of the mental-attentional capacity were measured through video recordings.\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"otherDataSources\":{\"en\":\"Medical files, vaccination record, observation videos\"},\"showFullDate\":false}",
                "start": "1999-11-01",
                "end": "2000-10-31"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2001"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2001-05-01",
                "end": "2002-04-30"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2002"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2002-05-01",
                "end": "2003-04-30"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2003"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2003-05-01",
                "end": "2004-04-30"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2004"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2004-05-01",
                "end": "2005-04-30"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2005"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2005-05-01",
                "end": "2006-04-30"
              },
              {
                "id": "10",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2006"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2006-05-01",
                "end": "2007-04-30"
              },
              {
                "id": "11",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2007"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2007-05-01",
                "end": "2008-04-30"
              },
              {
                "id": "12",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2008"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2008-05-01",
                "end": "2009-04-30"
              },
              {
                "id": "13",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2009"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2009-05-01",
                "end": "2010-04-30"
              },
              {
                "id": "14",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2010"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2010-05-01",
                "end": "2011-04-30"
              },
              {
                "id": "15",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2011"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2011-05-01",
                "end": "2012-04-30"
              },
              {
                "id": "16",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2012"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2012-05-01",
                "end": "2013-04-30"
              },
              {
                "id": "17",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2013"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2013-05-01",
                "end": "2014-04-30"
              },
              {
                "id": "18",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1996 - Data collection 2014"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about socioeconomic environment, physical environment, development, health problems, care received, lifestyle behaviours (sleep, nutrition, diet), temperament and behavior.\n\nCognitive measures were perfomed.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\"],\"showFullDate\":false}",
                "start": "2014-05-01",
                "end": "2015-04-30"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population was composed of babies aged between 60 and 61 weeks of gestation at the beginning of the data collection who were born to mothers living in Quebec."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false,\"number\":572},\"participant\":{\"noLimit\":false,\"number\":572}},\"selectionCriteria\":{\"newborn\":true,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"countriesIso\":[\"CAN\"],\"canadianProvinces\":[\"CA_QC\"],\"territory\":{\"en\":\"Quebec, Montreal, Chaudière-Appalaches, Laval, Lanaudière, Laurentides and Montérégie\"},\"otherCriteria\":{\"en\":\"English or French-speaking\"}},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"],\"info\":{\"en\":\"Participants were selected from specific health regions; the towns located about less than an hour drive from Montreal. Health regions located approximately less than an hour drive from Quebec City were also selected. The cities were chosen based on two criteria: the population of the city and the available traffic routes.\\nAfter the sample was drawn by the Bureau de la statistique du Québec,\\nSanté Québec received the list of names, addresses and telephone numbers of households to be interviewed. Recruitment was done through telephone calls.\"}}}"
          },
          {
            "id": "1",
            "name": [
              {
                "lang": "en",
                "value": "QLSCD 1 - Cohort 1998"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 1998"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</p>\n\n<p>A cognitive task was administered for the child.</p>\n\n<p>The Observations of Family Life (OLF) was used to describe the home environment.</p>\n\n<p>A check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"otherDataSources\":{\"en\":\"Home observation, medical record of the mother (obstetric)\"},\"description\":{\"en\":\"<ul><li>Interview at the participant's home with the person who best knows the child (questionnaires - ICCQ; PQCI).</li>\\n<li>Cognitive task for the child aged approx. 5 months (total estimated duration of interview and cognitive task: 90 minutes).</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>The Observations of Familiy Life (OLF) was used to describe the home environment.</li>\\n<li>Check of obstetric medical records for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"bioSamples\":[]}",
                "start": "1998-03-01",
                "end": "1998-12-31"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 1999"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</p>\n\n<p>A cognitive task was administered for the child.</p>\n\n<p>The Observations of Family Life (OLF) was used to describe the home environment.</p>\n\n<p>If not already obtained in 1998, a check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"otherDataSources\":{\"en\":\"Home observation, mother's medical record (obstetric)\"},\"description\":{\"en\":\"<ul><li>Interview at the participant's home with the person who best knows the child (questionnaires - ICCQ; PQCI).</li>\\n<li>Cognitive task for the child aged approx. 17 months (total estimated duration of interview and cognitive task: 120 minutes).</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>The Observations of Family Life (OLF) was used to describe the home environment.</li>\\n<li>Check of obstetric medical records (if not obtained in 1998) for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"bioSamples\":[]}",
                "start": "1999-03-01",
                "end": "1999-12-31"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2000"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</p></p>\n\n<p>The Observations of Family Life (OLF) was used to describe the home environment.</p>\n\n<p>A cognitive task was administered for the child.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>If not already obtained, a check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Interview at the participant's home with the person who best knows the child (questionnaires - ICCQ; PQCI).</li>\\n<li>Cognitive task for the child aged approx. 29 months (total estimated duration of interview and cognitive task: 90 minutes).</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>The Observations of Family Life (OLF) was used to describe the home environment.</li>\\n<li>Check of obstetric medical records (if not obtained before) for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"bioSamples\":[],\"otherDataSources\":{\"en\":\"Mother's medical record (obstetric)\"}}",
                "start": "2000-03-01",
                "end": "2000-11-30"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2001"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ), Self-Assessment Questionnaires (SAQS) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service. An observational questionnaire was completed by the interviewer.</p>\n\n<p>A cognitive task was completed by the child.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>If not already obtained, a check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"otherDataSources\":{\"en\":\"Mother's medical record (obstetric)\"},\"description\":{\"en\":\"<ul><li>Interview at the participant's home with the person who best knows the child (questionnaires - ICCQ; PQCI; SAQS).</li>\\n<li>Cognitive tasks for the child aged approx. 41 months (total estimated duration of interview and cognitive tasks: 120 minutes).</li>\\n<li>Observational questionnaire completed by interviewer (QCI)</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>Check of obstetric medical records (if not obtained before) for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"bioSamples\":[]}",
                "start": "2001-03-01",
                "end": "2001-11-30"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2002"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service. An observational questionnaire was completed by the interviewer.</p>\n\n<p>Cognitive tasks and a questionnaire were completed by the child.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>If not already obtained, a check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"otherDataSources\":{\"en\":\"Mother's medical record (obstetric)\"},\"description\":{\"en\":\"<ul><li>Interview at the participant's home with the person who best knows the child (questionnaires - ICCQ; PQCI).</li>\\n<li>Cognitive tasks and questionnaire (PQAC) for the child aged approx. 4 years (total estimated duration of interview and cognitive task: 120 minutes).</li>\\n<li>Observational questionnaire completed by interviewer (QCI)</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>Check of obstetric medical records (if not obtained before) for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"bioSamples\":[]}",
                "start": "2002-03-01",
                "end": "2002-06-30"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Nutrition Data collection 2002"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A 24-hour recall interview was conducted at the participant's home with the person who best knows the child regarding different aspects of the child's nutrition. A second 24-hour recall interview regarding the child's nutrition was conducted with approximately 50% of the participants.</p>\n\n<p>A self-administered questionnaire was completed by the parents.</p>\n\n<p>If the child attended daycare, a checklist was completed by the person in charge of the meals at the daycare. The nutritionist also visited the daycare to complete missing information on the checklist.</p>\n\n<p>Anthropometric measures of the child were taken.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>24 hours recall interview at the participant's home with the person who best knows the child regarding different aspects of the child's nutrition.</li>\\n<li>Anthropometric measures of the child.</li>\\n<li>Self-administred questionnaire completed by the parent (total estimated duration of interview and measurements: 60 minutes).</li>\\n<li>Second 24 hours recall interview regarding the child's nutrition with approx. 50% of the participants (estimated duration: 30 minutes).</li>\\n<li>If the child attended daycare, a checklist is completed by the person in charge of the meals at the daycare. The nutritionist also visited the daycare to complete missing information on the checklist.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\"],\"bioSamples\":[]}",
                "start": "2002-03-01",
                "end": "2002-07-31"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2003"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A phone interview was conducted with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ), Self-Assessment Questionnaires (SAQS) and Paper Questionnaire Completed by the Interviewer (PQCI) were used. The Self-Administered Questionnaire for Mother (SAQM) and Self-Administered Questionnaire for Father (SAQF) were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</p>\n\n<p>Cognitive tasks were completed by the child either at home, daycare or preschool.</p>\n\n<p>If not already obtained, a check of obstetric medical records was performed to obtain information regarding the pregnancy and birth.</p>"
                  }
                ],
                "content": "{\"otherDataSources\":{\"en\":\"Mother's medical record (obstetric)\"},\"description\":{\"en\":\"<ul><li>Phone interview with the person who best knows the child (questionnaires - ICCQ; PQCI; SAQS) (total estimated duration: 90 minutes).</li>\\n<li>Cognitive tasks for the child aged approx. 5 years either at home, at daycare or preschool (total estimated duration of cognitive tasks: 35-45 minutes).</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service.</li>\\n<li>Check of obstetric medical records (if not obtained before) for information regarding the pregnancy and birth.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"others\"],\"bioSamples\":[]}",
                "start": "2003-03-01",
                "end": "2003-06-30"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2004"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted by phone or at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) was used.</p>\n\n<p>Self-administered questionnaires were to be completed by each biological parent (whether resident or non-resident) and sent back by postal service or handed to the interviewer during the home visit. The Self-Administered Questionnaire for Teacher (SAQT) was completed by the child's teacher regarding the child's development at school and on friendships (best friend) in class.</p>\n\n<p>Cognitive tasks were completed by the child either at home or at school.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Interview at the participant's home or by phone with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 90 minutes).</li>\\n<li>Cognitive tasks and questionnaire (PQAC) for the child aged approx. 6 years either at home or at school (total estimated duration of interview and cognitive tasks (including Psychomotricity Data collection 2004): 150 minutes.</li>\\n<li>Questionnaire (SAQT) completed by the child's teacher regarding the child's development at school and on friendships (best friend) in class.</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by each biological parent (whether resident or non-resident) and sent back by postal service or handed to the interviewer during the home visit.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2004-03-01",
                "end": "2004-06-30"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Psychomotricity Data collection 2004"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The child completed an evaluation of his physical condition and other psychomotor activities. This evaluation took place at school or at home depending on the parent's choice.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>The child aged approx. 6 years completed an evaluation of his physical condition and other psychomotor activities. This evaluation took place at school or at home depending on the parent's choice.</p>\\n\"},\"dataSources\":[\"physical_measures\"],\"bioSamples\":[]}",
                "start": "2004-03-01",
                "end": "2004-08-31"
              },
              {
                "id": "10",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2005"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) was used. The Self-Administered Questionnaire for Mother (SAQM) was to be completed by the mother (whether resident or non-resident) and handed to the interviewer during the home visit.</p>\n\n<p>The Self-Administered Questionnaire for Teacher (SAQT) was completed by the child's teacher regarding the child's development at school. An observational questionnaire was completed by the interviewer.</p>\n\n<p>Cognitive tasks were completed by the child either at home, or at school.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 40 minutes).</li>\\n<li>Cognitive tasks and questionnaire (PQAC) for the child aged approx. 7 years either at home or at school (total estimated duration of interview and cognitive tasks: 45 minutes).</li>\\n<li>Anthropometric measures.</li>\\n<li>Questionnaire (SAQT) completed by the child's teacher regarding the child's development at school.</li>\\n<li>Paper questionnaire (SAQM) to be completed by the mother (whether resident or non-resident) and handed to the interviewer during the home visit.</li>\\n<li>Observational questionnaire (QCI) completed by the interviewer.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2005-03-01",
                "end": "2005-06-30"
              },
              {
                "id": "11",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Psychomotricity Data collection 2006"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The child completed an evaluation of his physical condition and other psychomotor activities. This evaluation took place at school or at home depending on the parent's choice.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<p>The child aged approx. 8 years completed an evaluation of his physical condition and other psychomotor activities. This evaluation took place at school or at home depending on the parent's choice (duration: approx. 45 minutes).</p>\\n\"},\"dataSources\":[\"physical_measures\"],\"bioSamples\":[]}",
                "start": "2006-03-01",
                "end": "2006-06-30"
              },
              {
                "id": "12",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2006"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>An interview was conducted at the participant's home with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) was used. The Self-Administered Questionnaire for Mother (SAQM) was to be completed by the mother (whether resident or non-resident) and handed to the interviewer during the home visit.</p>\n\n<p>The Self-Administered Questionnaire for Teacher (SAQT) was completed by the child's teacher regarding the child's development at school. An observational questionnaire was completed by the interviewer.</p>\n\n<p>Cognitive tasks were completed by the child either at home, or at school.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 40 minutes).</li>\\n<li>Cognitive tasks and questionnaire (PQAC) for the child aged approx. 8 years either at home or at school (total estimated duration of cognitive tasks: 45 minutes).</li>\\n<li>Anthropometric measures.</li>\\n<li>Questionnaire (SAQT) completed by the child's teacher regarding the child's development at school.</li>\\n<li>Paper questionnaire (SQAM) to be completed by the mother (whether resident or non-resident) and handed to the interviewer during the home visit.</li>\\n<li>Observational questionnaire (QCI) completed by the interviewer.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2006-03-01",
                "end": "2006-06-30"
              },
              {
                "id": "13",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2008"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A home or phone interview was conducted with the person who best knows the child. The  Interviewer Completed Computerized Questionnaire (ICCQ) was used. Self-administered questionnaires were to be completed by biological parents (whether residents or non-residents) and sent back by postal service or handed to the interviewer during the home visit.</p>\n\n<p>An observational questionnaire was completed by the interviewer.</p>\n\n<p>Cognitive tasks were completed by the child either at home, or at school.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home or phone interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 60 minutes).</li>\\n<li>Cognitive tasks and questionnaire (PQAC) for the child aged approx. 10 years either at home or at school (total estimated duration of cognitive tasks: 75 minutes).</li>\\n<li>Anthropometric measures.</li>\\n<li>Questionnaire (SAQT) completed by the child's teacher regarding the child's development at school.</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by the biological parents (whether resident or non-resident) and sent by postal service or handed to the interviewer during the home visit.</li>\\n<li>Observational questionnaire (QCI) completed by the interviewer.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2008-02-01",
                "end": "2008-06-30"
              },
              {
                "id": "14",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Health Data collection 2008-2009"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>Parents completed a self-administered questionnaire.</p>\n\n<p>A home visit by a nurse was scheduled for sample collection, child measurements and completion of a questionnaire with the child.</p>\n\n<p>A saliva sampling toolkit with instructions for parent and child was given to the parent.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\",\"saliva\"],\"description\":{\"en\":\"<ul><li>Home visit by a nurse for sample collection, child measurements and completion of a questionnaire with the child.</li>\\n<li>Self-administered parental questionnaire.</li>\\n<li>Saliva sampling toolkit with instructions for parent and child is given to the parent.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\",\"biological_samples\"]}",
                "start": "2008-03-01",
                "end": "2009-03-31"
              },
              {
                "id": "15",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2010"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A home or phone interview was conducted with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) was used. The Self-Administered Questionnaire for Mother (SAQM) was to be completed by the mother (whether resident or non-resident) and sent back by postal service or handed to the interviewer during the home visit.</p>\n\n<p>The Computerized Questionnaire for Child (CQC) was completed either at home or at school.</p>\n\n<p>The Self-Administered Questionnaire for Teacher (SAQT) was completed by the child's teacher regarding the child's development at school and an observational questionnaire was completed by the interviewer.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home or phone interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 55 minutes).</li>\\n<li>Questionnaire (CQC) for the child aged approx. 12 years either at home or at school (total estimated duration of questionnaire: 40 minutes).</li>\\n<li>Anthropometric measures.</li>\\n<li>Questionnaire (SAQT) completed by the child's teacher regarding the child's development at school.</li>\\n<li>Paper questionnaire (SAQM) to be completed by the mother (whether resident or non-resident) and sent by postal service or handed to the interviewer during the home visit.</li>\\n<li>Observational questionnaire (QCI) completed by the interviewer.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2010-02-01",
                "end": "2010-06-30"
              },
              {
                "id": "16",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2011"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A home or phone interview was conducted with the person who best knows the child. The Interviewer Completed Computerized Questionnaire (ICCQ) was used. Self-administered paper questionnaires were to be completed by biological parents (whether residents or non-residents) and sent back by postal service or handed to the interviewer during the home visit.</p>\n\n<p>The Self-Administered Questionnaire for Teacher (SAQT) was completed by the child's French/English and Math teacher regarding the child's development at school and an observational questionnaire was completed by the interviewer.</p>\n\n<p>The Computerized Questionnaire for Child (CQC) was completed either at home or at school.</p>\n\n<p>Anthropometric measures of the child were taken.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home or phone interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 35 minutes).</li>\\n<li>Questionnaire (CQC) for the child aged approx. 13 years either at home or at school (total estimated duration of questionnaire: 60 minutes).</li>\\n<li>Anthropometric measures.</li>\\n<li>Questionnaire (SAQT) completed by the child's French/English and Math teacher regarding the child's development at school.</li>\\n<li>Paper questionnaire (SAQM; SAQF) to be completed by the biological parents (whether resident or non-resident) and sent by postal service or handed to the interviewer during the home visit.</li>\\n<li>Observational questionnaire (QCI) completed by the interviewer.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"physical_measures\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2011-02-01",
                "end": "2011-06-30"
              },
              {
                "id": "17",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2013"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A home or phone interview was conducted with the person who best knows the child.The Interviewer Completed Computerized Questionnaire (ICCQ) was used. The Self-Administered Questionnaire for Mother (SAQM) was to be completed by the mother (whether resident or non-resident) and sent back by postal service or handed to the interviewer during the home visit.</p>\n\n<p>The Teenager's Online Questionnaire (TOQ) was completed by the teen.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home or phone interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 30 minutes).</li>\\n<li>Online questionnaire (TOQ) for the child aged approx. 15 years either at home, alone (total duration: 60-75 minutes).</li>\\n<li>Paper questionnaire (SAQM) to be completed by the mother (whether resident or non-resident) and sent by postal service or handed to the interviewer during the home visit.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2013-02-01",
                "end": "2013-06-30"
              },
              {
                "id": "19",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Biological Embedding of Childhood Adversity Data collection 2015"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A questionnaire or phone interview for the child was completed. Information was collected about the hair sample, lifestyle habits, and health.</p>\n\n<p>A saliva sample was collected and a lock of hair was provided by the young respondent himself and returned to the Institut de la statistique du Québec (ISQ).</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Online questionnaire (TOQ) or phone interview with the child aged approx. 19 years (total duration: 45 minutes).</ul></li>\"},\"dataSources\":[\"questionnaires\",\"biological_samples\"],\"bioSamples\":[\"saliva\",\"hair\"]}",
                "start": "2015-02-01",
                "end": "2015-05-31"
              },
              {
                "id": "18",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2015"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>A home or phone interview was conducted with the person who best knows the child.The Interviewer Completed Computerized Questionnaire (ICCQ) was used. The Self-Administered Questionnaire for Mother (SAQM) was to be completed by the mother (whether resident or non-resident) and sent back by postal service or handed to the interviewer during the home visit.</p>\n\n<p>The Teenager's Online Questionnaire (TOQ) was completed by the teen.</p>\n\n<p>Education information was taken from database.</p>\n\n<p>Blood samples were collected.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Home or phone interview with the person who best knows the child (questionnaires - ICCQ) (total estimated duration: 30 minutes).</li>\\n<li>Online questionnaire (TOQ) for the child aged approx. 17 years either at home, alone (total duration: 60-75 minutes).</li>\\n<li>Paper questionnaire (SAQM) to be completed by the mother (whether resident or non-resident) and sent by postal service or handed to the interviewer during the home visit.</li>\\n</ul>\"},\"dataSources\":[\"questionnaires\",\"biological_samples\",\"administratives_databases\"],\"bioSamples\":[\"blood\"],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2015-02-01",
                "end": "2015-06-30"
              },
              {
                "id": "20",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2017"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The Teenager's Online Questionnaire (TOQ) was administered or a phone interview was completed with the child.</p>\n\n<p>Education information was taken from database.</p>"
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Online questionnaire (TOQ) or phone interview with the child aged approx. 19 years (total duration: 45 minutes).</ul></li>\"},\"dataSources\":[\"questionnaires\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2017-02-01",
                "end": "2017-05-31"
              },
              {
                "id": "21",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Mental health Data collection 2018"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about values and confidence, prosocial   behaviour, romantic relationships, Attention deficit without hyperactivity, eating disorders, use of psychotropic substances, depression, generalized anxiety disorders, antisocial behaviours, victimization, mood disorders, psychopathy, suicide self-mutilation and involvement."
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Online questionnaire (TOQ) or phone interview with the child aged approx. 19 years (total duration: 45 minutes).</ul></li>\"},\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2018-03-01",
                "end": "2018-06-30"
              },
              {
                "id": "22",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 1 - Cohort 1998 - Data collection 2019"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information was collected about family, interpersonal relations, career choices, educational background and school engagement, stress, health and well-being, political interest, work experiences, financial situation, lifestyle habits, and sleeping habits.\n\nEducation information was taken from database."
                  }
                ],
                "content": "{\"description\":{\"en\":\"<ul><li>Online questionnaire (TOQ) or phone interview with the child aged approx. 19 years (total duration: 45 minutes).</ul></li>\"},\"dataSources\":[\"questionnaires\",\"administratives_databases\"],\"bioSamples\":[],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2019-02-01",
                "end": "2019-06-30"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "<p>The population was composed of babies (single births only) aged 59 or 60 gestational weeks at the beginning of each data collection period, born to mothers living in Quebec.</p>"
              }
            ],
            "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":2120},\"sample\":{\"noLimit\":false,\"number\":1000},\"info\":{\"en\":\"<p>Data collection 1998: 2,120 participants</p><p>Data collection 1999: 2,045 participants</p><p>Data collection 2000: 1,997 participants</p><p>Data collection 2001: 1,950 participants</p><p>Data collection 2002: 1,944 participants</p><p>Nutrition Data collection 2002: 1,550 participants</p><p>Data collection 2003: 1,776 participants</p><p>Data collection 2004: 1,529 participants</p><p>Psychomotricity Data collection 2004: 1,529 participants</p><p>Data collection 2005: 1,537 participants</p><p>Data collection 2006: 1,526 participants</p><p>Psychomotricity Data collection 2006: 1,526 participants</p><p>Data collection 2008: 1,402 participants</p><p>Health Data collection 2008-2009: 1,000 participants</p><p>Data collection 2010: 1,415 participants</p><p>Data collection 2011: 1,312 participants</p><p>Data collection 2013: 1,466 participants</p><p>Data collection 2015: 1,348 participants</p><p>Data collection 2017: 1,401 participants</p><p>Mental Health Data collection 2018: 1,245 participants </p><p>Data collection 2019: 1,323 participants</p><p>Nutrition data collection 2020: 908 participants</p><p>COVID-19 data collection 2020: 1,182 participants</p><p>Data collection 2021: 1,337 participants</p><p>Resilience data collection 2021: 1,327 participants</p>\"}},\"selectionCriteria\":{\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Quebec\"},\"otherCriteria\":{\"en\":\"<p>Mothers living in the sociosanitary areas 10 (North-of-Quebec), 17 (Cree territory) and 18 (Inuit territory) and mothers living on Indian reserves were excluded.</p></p><p>Minimum age: 59 gestational weeks at the beginning of each collection period at time 1</p><p>Maximum age: 60 gestational weeks at the beginning of each collection period at time 1</p>\"},\"info\":{\"en\":\"\"},\"newborn\":true,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{\"en\":\"<p>Some children were excluded because of constraints linked to the sample frame or major health problems, such as premature babies whose gestation lasted less than 24 weeks or more than 42 weeks and babies whose sex was unknown at participant selection.</p>\"}],\"ageMin\":null,\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"]}}"
          },
          {
            "id": "3",
            "name": [
              {
                "lang": "en",
                "value": "QLSCD 2 - Cohort 2018"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2018 - Data collection 2018"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2018-10-01",
                "end": "2019-03-31"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2018 - Data collection 2019"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2019-10-01",
                "end": "2020-03-31"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2018 - Data collection 2020"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2020-10-01",
                "end": "2020-12-31"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2018 - Data collection 2021"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2021-10-01",
                "end": "2022-03-31"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of babies aged 59 or 62 gestational weeks at the beginning of the data collection period, born between January 23rd and September 5, 2018 to mothers living in 3 selected sociosanitary regions: Montréal, Mauricie–Centre-du-Québec and Montérégie."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false,\"number\":449},\"participant\":{\"noLimit\":false,\"number\":449}},\"selectionCriteria\":{\"newborn\":true,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{\"en\":\"\"}],\"countriesIso\":[\"CAN\"],\"canadianProvinces\":[\"CA_QC\"],\"territory\":{\"en\":\"Montréal, Mauricie–Centre-du-Québec and Montérégie\"},\"otherCriteria\":{\"en\":\"Inclusion: Minimum age: 59 gestational weeks at the beginning of each collection period at time 1<br> Maximum age: 60 gestational weeks at the beginning of each collection period at time 1<br>Exclusion: death at birth, family lives outside Quebec permanently or in a region excluded from the study\"}},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"],\"info\":{\"en\":\"Participants were selected from the \\\"Fichier de Naissances Vivantes\\\" in the targeted sociosanitary regions and from the \\\"Paiement de l’allocation aux familles de Retraite Québec\\\". They are thereafter invited to participate.\"}}}"
          },
          {
            "id": "4",
            "name": [
              {
                "lang": "en",
                "value": "QLSCD 2 - Cohort 2020-2021"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2020-2021 - Data collection 2021"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2021-05-01",
                "end": "2022-03-31"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSCD 2 - Cohort 2020-2021 - Data collection 2022"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information about family structure, physical and social environment during pregnancy was collected.\n\n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"],\"bioSamples\":[]}",
                "start": "2022-05-01",
                "end": "2023-03-31"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of babies aged 60 gestational weeks at the beginning of each data collection period, born between October 1st, 2020 and September 30th, 2021 to mothers living in Quebec, in rural and urban settings and from low socio-economic status."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false,\"number\":8200},\"participant\":{\"noLimit\":false,\"number\":8200}},\"selectionCriteria\":{\"newborn\":true,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"countriesIso\":[\"CAN\"],\"canadianProvinces\":[\"CA_QC\"],\"otherCriteria\":{\"en\":\"Inclusion: 60 gestational weeks at the beginning of each collection period at time 1<br> Exclusion: Babies whose gestation lasted less than 24 weeks or more than 42 weeks; whose family is living in the the sociosanitary areas of Northern Quebec, Nunavik or the Cree Territory of James Bay and whose mothers are living on Indian reserves\"},\"territory\":{\"en\":\"Bas-Saint-Laurent, Saguenay–Lac-Saint-Jean, Capitale-Nationale, Mauricie-et-Centre-du-Québec, Estrie, Montréal, Outaouais, Abitibi-Témiscamingue, Côte-Nord, Gaspésie–Îles-de-la-Madeleine, Chaudière-Appalaches, Laval, Lanaudière, Laurentides, Montérégie\"}},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"],\"info\":{\"en\":\"Participants were selected from the \\\"Fichier de Naissances Vivantes\\\" in the targeted sociosanitary regions and were thereafter invited to participate.\"}}}"
          }
        ],
        "published": true,
        "variables": 30992,
        "permissions": {
          "view": false,
          "edit": false,
          "delete": false,
          "publish": false
        },
        "studyResourcePath": "individual-study",
        "content": "{\"numberOfParticipants\":{\"participant\":{\"noLimit\":false,\"number\":7641},\"sample\":{\"noLimit\":false,\"number\":1572},\"info\":{\"en\":\"QLSCD 1 - Cohort 1996: 572 participants<br>\\nQLSCD 1 - Cohort 1998: 2,120 participants<br>\\nQLSCD 2 - Cohort 2018: 449 participants<br>\\nQLSCD 2 - Cohort 2020-2021: 4,500 participants\"}},\"website\":\"http://www.iamillbe.stat.gouv.qc.ca\",\"access\":{\"access_bio_samples\":\"yes\",\"access_data\":\"yes\",\"access_other\":\"na\"},\"otherAccess\":{},\"maelstromAuthorization\":{\"authorized\":true,\"authorizer\":\"Dr. Bertrand Perron\",\"date\":\"1969-12-31\"},\"methods\":{\"designs\":[\"cohort_study\"],\"design\":\"cohort_study\",\"otherDesign\":{},\"followUpInfo\":{\"en\":\"<p>QLSCD 1 - Cohort 1996 was followed-up yearly from 5 months to 18 years old.</p>\\n\\n<p>QLSCD 1 - Cohort 1998 was followed-up yearly from 5 months to about 25 years of age (in 2023), with breaks at ages 9, 11, 14, 16, 18, 20, 22, and 24.</p>\\n\\n<p>QLSCD 2 - Cohort 2018 was followed-up every year since 2018.</p>\\n\\n<p>QLSCD 2 - Cohort 2020-2021 was first contacted in March 2021 and is meant to be followed up to adulthood, every year or every two years. </p>\"},\"recruitments\":[\"individuals\"],\"otherRecruitment\":{},\"info\":{\"en\":\"QLSCD 1 - Cohort 1998: Other biological samples were collected when the participants were 17 years old.<br>QLSCD 2 - Cohort 2020-2021 did not collect biological samples.\"}},\"startYear\":1996,\"specificAuthorization\":{\"authorized\":true,\"authorizer\":\"Dr. Bertrand Perron\",\"date\":\"1969-12-31\"},\"markerPaper\":\"Orri M, Boivin M, Chen C et al. Cohort Profile: Quebec Longitudinal Study of Child Development (QLSCD). Social Psychiatry and Psychiatric Epidemiology, 2021;56: 883–894.\",\"memberships\":{\"investigator\":[{\"person\":{\"id\":\"56549163e4b0107838869461\",\"title\":\"Dr.\",\"firstName\":\"Frank\",\"lastName\":\"Vitaro\",\"email\":\"frank.vitaro@umontreal.ca\",\"phone\":\"514-343-6111 ext 2569\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"School of Psychoeducation\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"},{\"parentId\":\"ejnq\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Frank Vitaro\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549163e4b0107838869462\",\"title\":\"Dr.\",\"firstName\":\"Sylvana\",\"lastName\":\"Côté\",\"email\":\"sylvana.cote@umontreal.ca\",\"phone\":\"514-343-6963\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"Social and Preventive Medicine\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Sylvana Côté\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549163e4b0107838869463\",\"title\":\"Dr.\",\"firstName\":\"Michel\",\"lastName\":\"Boivin\",\"email\":\"Michel.Boivin@psy.ulaval.ca\",\"phone\":\"418 656-2131 ext 2825\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université Laval\"},\"department\":{\"en\":\"School of Psychology\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Michel Boivin\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"58c97733e4b0ed1233ef0d1f\",\"title\":\"Dr.\",\"firstName\":\"Véronique\",\"lastName\":\"Dupéré\",\"email\":\"veronique.dupere@umontreal.ca\",\"phone\":\"514-343-6111 ext. 34360\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"School of Psychoeducation\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Véronique Dupéré\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549163e4b0107838869465\",\"title\":\"Dr.\",\"firstName\":\"Élise\",\"lastName\":\"Ledoux\",\"email\":\"ledoux.elise@irsst.qc.ca\",\"phone\":\"(514) 288-1551 ext 220\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Institut de recherche Robert-Sauvé en santé et en sécurité du travail\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Élise Ledoux\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549163e4b0107838869466\",\"title\":\"Dr.\",\"firstName\":\"Bertrand\",\"lastName\":\"Perron\",\"email\":\"bertrand.perron@stat.gouv.qc.ca\",\"phone\":\"514 873-4749 ext 6132\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Institut de la statistique du Québec\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Bertrand Perron\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"58c977f7e4b0ed1233ef0d23\",\"title\":\"Dr.\",\"firstName\":\"Simon\",\"lastName\":\"Larose\",\"email\":\"simon.larose@fse.ulaval.ca\",\"phone\":\"(418) 656-2131 ext. 7040\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université Laval\"},\"department\":{\"en\":\"Faculty of Education Sciences\"},\"address\":{\"city\":{\"en\":\"Quebec\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Simon Larose\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"56549160e4b01078388691f4\",\"title\":\"Dr.\",\"firstName\":\"Richard E. \",\"lastName\":\"Tremblay\",\"email\":\"richard.ernest.tremblay@umontreal.ca\",\"phone\":\"(514) 343-6963\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Université de Montréal\"},\"department\":{\"en\":\"Department of Psychology, Psychiatry and Pediatry\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"zip\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"3d\",\"role\":\"investigator\"},{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Richard E.  Tremblay\"},\"role\":\"investigator\"},{\"person\":{\"id\":\"58bf1785e4b07fc1094099d1\",\"title\":\"Dr.\",\"firstName\":\"Lise\",\"lastName\":\"Dubois\",\"email\":\"lise.dubois@uottawa.ca\",\"phone\":\"(613) 562-5398\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"University of Ottawa\"},\"department\":{\"en\":\"Department of Epidemiology and Community Medicine\"},\"address\":{\"city\":{\"en\":\"Ottawa\"},\"state\":\"Ontario\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"investigator\"}],\"networkMemberships\":[],\"fullName\":\"Lise Dubois\"},\"role\":\"investigator\"}],\"contact\":[{\"person\":{\"id\":\"58c96660e4b0ed1233ef0d1d\",\"firstName\":\"Nancy\",\"lastName\":\"Illick\",\"email\":\"nancy.illick@stat.gouv.qc.ca\",\"phone\":\"514 873-4749 ext. 6126\",\"dataAccessCommitteeMember\":false,\"institution\":{\"name\":{\"en\":\"Institut de la statistique du Québec\"},\"address\":{\"city\":{\"en\":\"Montreal\"},\"state\":\"Quebec\",\"countryIso\":\"CAN\"}},\"studyMemberships\":[{\"parentId\":\"qlscd\",\"role\":\"contact\"}],\"networkMemberships\":[],\"fullName\":\"Nancy Illick\"},\"role\":\"contact\"}]},\"info\":{\"en\":\"QLSCD 1 - Cohort 1998: Questionnaires available <a href=\\\" http://www.jesuisjeserai.stat.gouv.qc.ca/informations_chercheurs/outils_collecte/outils_collecte_an.html\\\">  here </a><br>\\nQLSCD 2 - Cohort 2020-2021: Questionnaires soon to be available (in 2022)\\n <a href=\\\" \\n https://statistique.quebec.ca/growingupinquebec/index_an.html\\\" > QLSCD 2 website </a><br>\"},\"access_fees\":true,\"access_restrictions\":true,\"access_info_location\":[\"study_representative\"],\"access_info_representative\":{\"name\":\"Nancy Illick\",\"institution\":\"Institut de la statistiques du Québec\",\"email\":\"nancy.illick@stat.gouv.qc.ca\",\"telephone\":\"514-873-4749 ext. 6126\"},\"access_permission_data\":{\"public_sector\":\"yes\",\"private_sector\":\"no\",\"not_for_profit_organization\":\"yes\"},\"access_permission_biological_samples\":{\"public_sector\":\"yes\",\"private_sector\":\"no\",\"not_for_profit_organization\":\"yes\"},\"access_permission_additional_info\":{\"en\":\"\"},\"access_data_can_leave\":{\"study_facility\":\"no\",\"country\":\"no\"},\"access_biological_samples_can_leave\":{\"study_facility\":\"yes\",\"country\":\"no\"},\"access_data_sharing_cost\":{\"data\":\"no_cost\",\"biological_samples\":\"variable_cost\"},\"access_cost_reduction_consideration\":{\"data\":\"no\",\"bio_samples\":\"no\"},\"otherMarkerPapers\":[{}],\"pubmedId\":\"33185737\"}"
      },
      {
        "id": "qlskc",
        "timestamps": {
          "created": "2020-06-18T19:39:40.557Z",
          "lastUpdate": "2023-02-07T18:55:19.985Z"
        },
        "name": [
          {
            "lang": "en",
            "value": "Quebec Longitudinal Study of Kindergarten Children"
          }
        ],
        "acronym": [
          {
            "lang": "en",
            "value": "QLSKC"
          }
        ],
        "design": "cohort_study",
        "targetNumber": {
          "noLimit": false,
          "number": 3017
        },
        "countries": [
          "CAN"
        ],
        "objectives": [
          {
            "lang": "en",
            "value": "The study examined the prevalence of behaviour problems during the elementary school years using a developmental perspective. \nFour major aims were defined:\n- to describe the different developmental trajectories among children from their entry into kindergarten to their entry into the work force;\n\n- to identify the factors that enable us to recognize, from kindergarten, those children who are at risk of developing adjustment problems over the course of their schooling education;\n\n- to identify the protective factors that will enable children to succeed in school and to adapt well socially, in spite of unfavorable elements in their environment;\n\n- to contribute to the knowledge necessary for the development of programs adapted to high risk children. "
          }
        ],
        "dataSources": [
          "questionnaires",
          "biological_samples",
          "administratives_databases"
        ],
        "populationSummaries": [
          {
            "id": "1",
            "name": [
              {
                "lang": "en",
                "value": "QLSKC population"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Kindergarten"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Data on the participants were obtained via teacher and parent reports yearly from age 6 to 8 years. Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1986",
                "end": "1988"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 1"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Data on the participants were obtained via teacher and parent reports yearly from age 6 to 8 years. Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1987",
                "end": "1989"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 2"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Data on the participants were obtained via teacher and parent reports yearly from age 6 to 8 years. Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1988",
                "end": "1990"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 3"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Data on the participants were obtained via teacher and parent reports yearly from age 6 to 8 years. Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1989",
                "end": "1991"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 4"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period. The child completed the Pubertal Development Scale."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1990",
                "end": "1992"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 5"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period. The child completed the Pubertal Development Scale."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1991",
                "end": "1993"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 6"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Self-administered questionnaires, such as The Social Behaviour Questionnaire were completed by both teacher and parent to assess the behaviour of the child. The emotional climate for the child and his/her temperament were assessed by the parent. Information concerning the child (perinatal information, sleep, life events during the previous year, school environment, puberty, etc.) or his/her family (socio-demographic information, general health, etc.) was also collected during this period. The child completed the Pubertal Development Scale."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1992",
                "end": "1994"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - Grade 7"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "At age 13 years (grade 7), adolescents who attended a school where there were at least six other study participants were invited to self-report their delinquent behaviours via paper and pencil questionnaires. The Self-Rating Questionnaire collected socio-demographic data as well as information on family life, relationships, activities and jobs, sexuality, and school environment and progress. Furthermore, the Social Behaviour Questionnaire, Pubertal Development Scale, Child Depression Inventory and Self-Description Questionnaire were also completed."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1993",
                "end": "1995"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - 15 to 17 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The Self-Rating Questionnaire collected information about socio-demographics, school environment and progress, activities and jobs, general health, alcohol and drug use, delinquency and legal issues, professional services use, as well as life events and relationships.At age 15 years, children and their parents were invited separately to undergo a structured psychiatric interview using the Diagnostic Interview Schedule for Children (DISC) and to fill out questionnaires concerning their life habits and the family history of mental health problems.<p/> "
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1995",
                "end": "1997"
              },
              {
                "id": "10",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - 19 to 21 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>When the participants were 19 years old, information on the familial determinants of the young adults’ psychosocial adjustment (activities, feelings, relationships and behaviours) was collected.</p>\n<p>Information about high school graduation was accessed from the Quebec Ministry of Education.<p/> "
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1999",
                "end": "2002"
              },
              {
                "id": "11",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - 22 to 24 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>The Self-Rating Questionnaire collected information about socio-demographics, school environment and progress, activities and jobs, general health, alcohol and drug use, delinquency and legal issues, professional services use, as well as life events and relationships. Participants underwent diagnostic interviews about mental health and personality. The Suicidal Intent Scale and Scale for Suicidal Ideation were completed.<p/>\n\n<p>Blood and saliva samples were collected.<p/>\n\n<p>Information about high school graduation was accessed from the Quebec Ministry of Education.<p/>\n\n<p>Information on delinquency was obtained from judicial records.<p/>\n"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\",\"saliva\"],\"dataSources\":[\"questionnaires\",\"biological_samples\",\"administratives_databases\"],\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "2001",
                "end": "2004"
              },
              {
                "id": "12",
                "name": [
                  {
                    "lang": "en",
                    "value": "QLSKC - 29 to 31 years"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "<p>At age 29 years, data concerning gambling practices and the main dimensions previously assessed were collected on a subsample of subjects who had complete data from the 15 or 22 years waves. This last wave was the first opportunity to collect information on the first child of the 573 participants who were parents at that time. Six versions of the questionnaire were developed according to children’s age group to assess various dimensions including pregnancy, health, sleep, behaviour, peer-relationships, childcare, school progress, parental attitudes and child environment.<p/>\n\n<p>In addition, saliva samples were collected from 392 children for genetic analysis.<p/>\n\n<p>Reports from the Director of Youth Protection (DYP) and information about post-secondary study degrees were collected as well.</p>"
                  }
                ],
                "content": "{\"bioSamples\":[\"saliva\"],\"dataSources\":[\"questionnaires\",\"biological_samples\"]}",
                "start": "2008",
                "end": "2010"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population consisted of kindergarten boys and girls attending French-speaking public schools in the Canadian province of Quebec during the 1986-87 and 1987-88 school years. Two thousand children representative of the population and 1017 children exhibiting disruptive behaviour problems were included in the cohort."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false,\"number\":3017},\"participant\":{\"noLimit\":false,\"number\":3017}},\"selectionCriteria\":{\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{}],\"healthStatus\":[{}],\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Quebec\"},\"ageMin\":6,\"otherCriteria\":{\"en\":\"Attending French-speaking public schools\"},\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"general_population\"],\"generalPopulationSources\":[\"selected_samples\"],\"info\":{\"en\":\"2000 (1001 boys) of the subjects were chosen randomly and proportionally according to the 11 administrative regions of Québec, to create a representative sample of the children who attended kindergarten in a francophone public school in the province of Quebec in the 1986-87 and 1987-88 school years. \\nThe remaining 1017 children (593 boys) scored at or above the 80th percentile for disruptive behaviors at the end of kindergarten (age 6 years) with gender-specific cut-offs.\"}}}"
          }
        ],
        "published": true,
        "variables": 12231,
        "permissions": {
          "view": false,
          "edit": false,
          "delete": false,
          "publish": false
        },
        "studyResourcePath": "individual-study",
        "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false,\"number\":3017},\"participant\":{\"noLimit\":false,\"number\":3017}},\"maelstromAuthorization\":{\"authorized\":false},\"access_fees\":false,\"specificAuthorization\":{\"authorized\":false},\"access_restrictions\":false,\"startYear\":1986,\"methods\":{\"design\":\"cohort_study\",\"recruitments\":[\"individuals\"],\"followUpInfo\":{\"en\":\"To date, 12 data collections have been conducted over 24 years (1986–2010), and three generations of participants have been involved in the study (i.e. the study child, his parents and the study child’s first child). Data on the participants were obtained via teacher reports yearly from age 6–12 years; via parent reports from age 6–19 years; and via the participants themselves at age 13–29 years. Finally, data on the study child’s first child were obtained via paper or web-based questionnaires rated by the participant (now a parent).\"}},\"access\":{\"access_data\":\"no\",\"access_bio_samples\":\"no\",\"access_other\":\"no\"},\"markerPaper\":\"Rouquette A, Cote SM, Pryor LE, et al. Cohort Profile: The Quebec Longitudinal Study of Kindergarten Children (QLSKC). International Journal of Epidemiology, 2012; 43(1), 23-33.\",\"pubmedId\":\"23159828\",\"otherMarkerPapers\":[{}]}"
      },
      {
        "id": "mles-1",
        "timestamps": {
          "created": "2020-12-11T19:44:11.570Z",
          "lastUpdate": "2021-08-09T18:44:55.166Z"
        },
        "name": [
          {
            "lang": "en",
            "value": "Montreal Longitudinal and Experimental Study"
          }
        ],
        "acronym": [
          {
            "lang": "en",
            "value": "MLES"
          }
        ],
        "design": "cohort_study",
        "targetNumber": {
          "noLimit": false,
          "number": 1037
        },
        "countries": [
          "CAN"
        ],
        "objectives": [
          {
            "lang": "en",
            "value": "The main objectives of this study are:\n* to identify, from kindergarten, the predictors of adjustment problems among boys from low socioeconomic status families;\n* to describe the development of behaviour problems from kindergarten to adulthood;\n* to evaluate a program aimed at the prevention of the development of behaviour problems among boys from disadvantaged areas.\n\t\n"
          }
        ],
        "dataSources": [
          "questionnaires",
          "administratives_databases",
          "others",
          "biological_samples",
          "cognitive_measures",
          "physical_measures"
        ],
        "populationSummaries": [
          {
            "id": "1",
            "name": [
              {
                "lang": "en",
                "value": "MLES - Longitudinal group"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Baseline"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors of each participant were rated by teachers using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1984",
                "end": "1984"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 1"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, peers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. Peer assessments were obtained with the Pupil Evaluation Inventory. \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1988",
                "end": "1988"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 2"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, peers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. Peer assessments were obtained with the Pupil Evaluation Inventory. \n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1989",
                "end": "1989"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 3"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, peers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. Peer assessments were obtained with the Pupil Evaluation Inventory. \n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1990",
                "end": "1990"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 4"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. \n\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1991",
                "end": "1991"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 5"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. \n\n\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1992",
                "end": "1992"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 6"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships and social support.\nBehaviours of participants were rated by their classroom teachers, mothers, and themselves. Teacher and mother ratings were completed using two questionnaires: the Preschool Behavior Questionnaire and the Social Behavior Questionnaire. \n\n\n\n\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1993",
                "end": "1993"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 7"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items. \n\n\n\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1994",
                "end": "1994"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 8"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events; on attitudes towards parents, school and friends; and on leisure activities which included self-reported delinquency items. Information on academic performances also were collected. Participant's mother completed a questionnaire concerning the perinatal period and the birth of the subject.\n \n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1995",
                "end": "1995"
              },
              {
                "id": "10",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 9"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information on life events from the Quebec Director of Youth Protection (DYP) and on delinquency from judicial records were collected.\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"administratives_databases\",\"others\"],\"otherDataSources\":{\"en\":\"Criminal records\"},\"administrativeDatabases\":[\"socioeconomic_databases\"]}",
                "start": "1997",
                "end": "1997"
              },
              {
                "id": "11",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 10"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Criminal records of each subject were checked.\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"others\"],\"otherDataSources\":{\"en\":\"Criminal records\"}}",
                "start": "2000",
                "end": "2000"
              },
              {
                "id": "12",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 11"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items.\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "2001",
                "end": "2001"
              },
              {
                "id": "13",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 12"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Criminal records of each subject were checked. Information about high school graduation was accessed from the Quebec Ministry of Education.\n \n"
                  }
                ],
                "content": "{\"dataSources\":[\"administratives_databases\",\"others\"],\"administrativeDatabases\":[\"socioeconomic_databases\"],\"otherDataSources\":{\"en\":\"Criminal records\"}}",
                "start": "2003",
                "end": "2003"
              },
              {
                "id": "14",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 13"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Blood samples were collected for ADN analysis.\n \n"
                  }
                ],
                "content": "{\"bioSamples\":[\"blood\"],\"dataSources\":[\"biological_samples\"]}",
                "start": "2004",
                "end": "2004"
              },
              {
                "id": "15",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 14"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Each subject answered a questionnaire on personality and life events, also on attitudes towards parents, school, friends, and leisure activities which included self-reported delinquency items.\n \n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\"]}",
                "start": "2005",
                "end": "2005"
              },
              {
                "id": "16",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Longitudinal group - Follow-up 15"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Information on different areas of life, personal development and links with socio-economic and family status of the subject was collected through web-questionnaire. The spouse also fill a web-questionnaire to give information on environment, health interpersonal relationships, behaviours and childcare arrangements of their first child.\nResults of biomarkers discovered from blood analysis and related to behaviours and health were checked.\n \n"
                  }
                ],
                "content": "{\"dataSources\":[\"questionnaires\",\"administratives_databases\"],\"administrativeDatabases\":[\"health_databases\"]}",
                "start": "2009",
                "end": "2009"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of Caucasian, Canadian-born kindergarten boys who are attending one of the 53 Montreal schools with lowest SES index, and whose parents are French-speaking and primarily low-income."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false},\"participant\":{\"noLimit\":false,\"number\":1037}},\"selectionCriteria\":{\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{\"en\":\"Caucasian\"}],\"healthStatus\":[{}],\"gender\":\"men\",\"ageMin\":5,\"ageMax\":6,\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Montreal, Quebec\"},\"otherCriteria\":{\"en\":\"Born from French-speaking Canadian parents who had less than 15 years of schooling and attended class in one of the 53 schools located in lower socioeconomic areas.\"},\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"specific_population\"],\"specificPopulationSources\":[\"other\"],\"otherSpecificPopulationSource\":{\"en\":\"Kindergarten boys in 53 schools from low socioeconomic districts\"}}}"
          },
          {
            "id": "2",
            "name": [
              {
                "lang": "en",
                "value": "MLES - Observational group"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 1"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents. \nTeachers rated the subjects with the Social Behavior Questionnaire (SBQ). \nDirect observations of social interactions were made at school, at home, and in laboratory situations. Peers sociometric data were collected at school.\nPsychophysiological and neuropsychological tests were made.\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1985",
                "end": "1985"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 2"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made at school, at home, and in laboratory situations. Peers sociometric data were collected at school.\nPsychophysiological and neuropsychological tests were made.\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1986",
                "end": "1986"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 3"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made at school, at home, and in laboratory situations. Peers sociometric data were collected at school.\nPsychophysiological and neuropsychological tests were made.\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1987",
                "end": "1987"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 4"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made at school, at home, and in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1988",
                "end": "1988"
              },
              {
                "id": "5",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 5"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teacher and parent.\nDirect observations of social interactions were made at school, at home, and in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1989",
                "end": "1989"
              },
              {
                "id": "6",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 6"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made at school, at home, and in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1990",
                "end": "1990"
              },
              {
                "id": "7",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 7"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1991",
                "end": "1991"
              },
              {
                "id": "8",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 8"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1992",
                "end": "1992"
              },
              {
                "id": "9",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Observational group - Year 9"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Questionnaires that provided information on family background, life events, parenting behavior, domestic relationships and social support were completed by teachers and parents.\nDirect observations of social interactions were made in laboratory situations.\nPsychophysiological and neuropsychological tests were made.\n\n\n\n\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\"]}",
                "start": "1993",
                "end": "1993"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of Caucasian, Canadian-born males who are attending one of the 53 Montreal schools with lowest SES index, and whose parents are French-speaking and primarily low-income. This population got disruptive behavior scores above the 70th percentile on the Social Behavior Questionnaire (SBQ)."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false},\"participant\":{\"noLimit\":false,\"number\":82}},\"selectionCriteria\":{\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{\"en\":\"Caucasian\"}],\"healthStatus\":[{}],\"gender\":\"men\",\"ageMin\":7,\"ageMax\":9,\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Montreal, Quebec\"},\"otherCriteria\":{\"en\":\"Born from French-speaking Canadian parents who had less than 15 years of schooling and attended class in one of the 54 schools located in lower socioeconomic areas.\"},\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"specific_population\"],\"specificPopulationSources\":[\"other\"],\"otherSpecificPopulationSource\":{\"en\":\"Boys from one of 53 schools from low socioeconomic districts\"}}}"
          },
          {
            "id": "3",
            "name": [
              {
                "lang": "en",
                "value": "MLES - Intervention group"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Intervention group - Pre-test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships, and social support. \nBehaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and parents using standardized questionnaires such as the Social Behavior Questionnaire (SBQ)."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1985",
                "end": "1985"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Intervention group - Test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Participants and their parents received training sessions to improve social skills and parental behavior. Peers sociometric data were collected at school. \nBehaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and parents using standardized questionnaires such as the Social Behavior Questionnaire (SBQ). The Pupil Evaluation Inventory (PEI) was used to assess disruptive behavior, withdrawal and likability according to peers. \nPsychophysiological and neuropsychological tests were made.\nSchool records provided data regarding class placements.\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1986",
                "end": "1986"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Intervention group - Post-test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and mothers using the Social Behavior Questionnaire (SBQ). School Adjustment Index was determined from teacher and peer ratings of disruptive behavior (using the Pupil Evaluation Inventory) and class placement (from school records). "
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1987",
                "end": "1988"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Intervention group - Follow-up"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and mothers using the Social Behavior Questionnaire (SBQ). School Adjustment Index was determined from teacher and peer ratings of disruptive behavior (using the Pupil Evaluation Inventory) and class placement (from school records). "
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1989",
                "end": "1990"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of Caucasian, Canadian-born males who are attending one of the 53 Montreal schools with lowest SES index, and whose parents are French-speaking and primarily low-income.This population got disruptive behavior scores above the 70th percentile on the Social Behavior Questionnaire (SBQ) and received training sessions with their parents."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false},\"participant\":{\"noLimit\":false,\"number\":43}},\"selectionCriteria\":{\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{\"en\":\"Caucasian\"}],\"healthStatus\":[{}],\"gender\":\"men\",\"ageMin\":7,\"ageMax\":9,\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Montreal, Quebec\"},\"otherCriteria\":{\"en\":\"Born from French-speaking Canadian parents who had less than 15 years of schooling and attended class in one of the 53 schools located in lower socioeconomic areas.]\"},\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"specific_population\"],\"specificPopulationSources\":[\"other\"],\"otherSpecificPopulationSource\":{\"en\":\"Boys attending one of the 53 schools from low socioeconomic districts\"}}}"
          },
          {
            "id": "4",
            "name": [
              {
                "lang": "en",
                "value": "MLES - Control group"
              }
            ],
            "dataCollectionEventSummaries": [
              {
                "id": "1",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Control group - Pre-test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Mothers completed questionnaires on family background, life events, parenting behavior, domestic relationships, and social support.\nBehaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and parents using standardized questionnaires such as the Social Behavior Questionnaire (SBQ). "
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\"]}",
                "start": "1985",
                "end": "1985"
              },
              {
                "id": "2",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Control group - Test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and parents using standardized questionnaires such as the Social Behavior Questionnaire (SBQ). The Pupil Evaluation Inventory (PEI) was used to assess disruptive behavioral, withdrawal and likability according to peers.\nPeers sociometric data were collected at school. \nPsychophysiological and neuropsychological tests were made.\nSchool records provided data regarding class placements.\n"
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"cognitive_measures\",\"physical_measures\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1986",
                "end": "1987"
              },
              {
                "id": "3",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Control group - Post-test"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and mothers using the Social Behavior Questionnaire (SBQ). School Adjustment Index was determined from teacher and peer ratings of disruptive behavior (using the Pupil Evaluation Inventory) and class placement (from school records)."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1987",
                "end": "1988"
              },
              {
                "id": "4",
                "name": [
                  {
                    "lang": "en",
                    "value": "MLES - Control group - Follow-up"
                  }
                ],
                "description": [
                  {
                    "lang": "en",
                    "value": "Behaviors (disruptive, anxious, inattentive, and prosocial behavior) of each participant were rated by teachers and mothers using the Social Behavior Questionnaire (SBQ).School Adjustment Index was determined from teacher and peer ratings of disruptive behavior (using the Pupil Evaluation Inventory) and class placement (from school records)."
                  }
                ],
                "content": "{\"bioSamples\":[],\"dataSources\":[\"questionnaires\",\"others\"],\"otherDataSources\":{\"en\":\"School records\"}}",
                "start": "1989",
                "end": "1990"
              }
            ],
            "description": [
              {
                "lang": "en",
                "value": "The population is composed of Caucasian, Canadian-born males who are attending one of the 53 Montreal schools with lowest SES index, and whose parents are French-speaking and primarily low-income. This population got disruptive behavior scores above the 70th percentile on the Social Behavior Questionnaire (SBQ)."
              }
            ],
            "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false},\"participant\":{\"noLimit\":false,\"number\":41}},\"selectionCriteria\":{\"newborn\":false,\"twins\":false,\"ethnicOrigin\":[{\"en\":\"Caucasian\"}],\"healthStatus\":[{}],\"gender\":\"men\",\"ageMin\":7,\"ageMax\":9,\"countriesIso\":[\"CAN\"],\"territory\":{\"en\":\"Montreal, Quebec\"},\"otherCriteria\":{\"en\":\"Born from French-speaking Canadian parents who had less than 15 years of schooling and attended class in one of the 53 schools located in lower socioeconomic areas.\"},\"canadianProvinces\":[\"CA_QC\"]},\"recruitment\":{\"dataSources\":[\"specific_population\"],\"specificPopulationSources\":[\"other\"],\"otherSpecificPopulationSource\":{\"en\":\"Boys attending one of the 53 schools from low socioeconomic districts\"}}}"
          }
        ],
        "published": true,
        "variables": 0,
        "permissions": {
          "view": false,
          "edit": false,
          "delete": false,
          "publish": false
        },
        "studyResourcePath": "individual-study",
        "content": "{\"numberOfParticipants\":{\"sample\":{\"noLimit\":false},\"participant\":{\"noLimit\":false,\"number\":1037}},\"maelstromAuthorization\":{\"authorized\":false},\"access_fees\":false,\"specificAuthorization\":{\"authorized\":false},\"access_restrictions\":false,\"website\":\"http://gripinfo.ca/grip/consultation/etudes/infoGen.asp?TS=1606938119807&id_etude=1#L30\",\"startYear\":1984,\"endYear\":2006,\"methods\":{\"design\":\"cohort_study\",\"followUpInfo\":{\"en\":\"For the longitudinal group, after the first evaluation in kindergarten, evaluations were made starting at age 10. The children were assessed annually for behavior problems and delinquency from age 10 to 15 years, and substance use from age 13 to 17 years.These evaluations were made by parents, teachers, classmates, and the children themselves.\\nFor the experimental group, follow-up was done when participants were 11 and 12.\"},\"recruitments\":[\"individuals\"]},\"access\":{\"access_data\":\"yes\",\"access_bio_samples\":\"yes\"},\"markerPaper\":\"Tremblay RE, Vitaro F, Bertrand L, et al. Parent and child training to prevent early onset of delinquency: The Montréal longitudinal–experimental study. In J. McCord & R. E. Tremblay (Eds.), Preventing antisocial behavior: Interventions from birth through adolescence, 1992; 117–138\"}"
      }
    ]
  }

}());
