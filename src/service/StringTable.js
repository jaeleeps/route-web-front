import { ImageTable } from "./ImageTable";

export const StringTable = {
  ABOUT: {
    TITLE: {

    },
    MAIN: {
      PARAGRAPHS: [
        {
          ALL: 'ROUTE is a non-profit student consulting group that provides non-profit consulting services to small businesses and startups that need strategic consulting.'
          , HIGHLIGHT: 'ROUTE'
          , highlight_color: '#92D050'
          , NORMAL: ' is a non-profit student consulting group that provides non-profit consulting services to small businesses and startups that need strategic consulting.'
        },
        {
          ALL: 'ROUTE refers to the optimal route in the process of transmitting communication data within a network. Therefore, ROUTE aims to utilize our analytical ability and creativity to help our clients to reach their target audience more effectively through the optimal route we suggest.'
          , HIGHLIGHT: 'ROUTE'
          , highlight_color: '#7030A0'
          , NORMAL: ' refers to the optimal route in the process of transmitting communication data within a network. Therefore, ROUTE aims to utilize our analytical ability and creativity to help our clients to reach their target audience more effectively through the optimal route we suggest.'
        },
        {
          ALL: 'MEMBERS of ROUTE are passionate domestic/international students who are studying in various majors and actively participating in diverse activities to gain experience. Through the eyes of these students, ROUTE provides strategically helpful insights and solutions to our clients while enabling our members to acquire practical experiences. To conclude, ROUTE pursues a complementary relationship with our clients based on active communication and cooperation.'
          , HIGHLIGHT: 'MEMBERS of ROUTE'
          , highlight_color: '#24B0F0'
          , NORMAL: ' are passionate domestic/international students who are studying in various majors and actively participating in diverse activities to gain experience. Through the eyes of these students, ROUTE provides strategically helpful insights and solutions to our clients while enabling our members to acquire practical experiences. To conclude, ROUTE pursues a complementary relationship with our clients based on active communication and cooperation.'
        }
      ]
    }
  },

  SERVICE: {
    TITLE: "SERVICE",
    DESCRIPTION: "HOW DO WE OFFER STRATEGY",
    MAIN: {
      CARDS: [
        {
          TITLE: "MARKET RESEARCH",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                `Our working process involves providing our clients a carefully coordinated market research.`
                , `The market research will be based on SEPTEmber(Social / Economic / Political / Technological / Environmental) Analysis of the client-relevant industry and ROUTE will also provide market segmentation analysis to facilitate the stakeholder return process.`
                , `In addition to the above, ROUTE will also provide competitor and customer needs analysis.`
              ]
            }
          ]
        },

        {
          TITLE: "DATA ANALYTICS",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                `For the best business strategy recommendation, ROUTE will provide an in-depth analysis of our client’s internal structure and performance.`
                , `Some of the analytics that the organization will provide, but are not limited to, the following: accounting, asset management, sales performance, forecasting.`
              ]
            }
          ]
        },
        
        {
          TITLE: "STRATEGY RECOMMENDATION",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                `Our goal is to provide customized consulting services. Therefore, we are willing to give a strategic recommendation for any challenges our client firms are facing. We focus on scoping projects that can address our clients' unique situations including those listed below. `
              ]
            },
            {
              type: "subtitle",
              items: [
                `Examples of Our Services`
              ]
            },
            {
              type: "block",
              items: [
                {
                  title: 'Building Market Strategy',
                  color: '#92D050',
                  descriptions: [
                    'Market Strategy Competitor analysis, funding models, and data collection'
                  ]
                },
                {
                  title: 'Marketing and Reaching Customers through Media',
                  color: '#7030A0',
                  descriptions: [
                    'Social Media impact measurement, website and user experience design, general marketing strategy, and customer analytics'
                  ]
                },
                {
                  title: 'Market Entry and Expansion',
                  color: '#24B0F0',
                  descriptions: [
                    'Go-to-market strategy for new products and services, Expanding market for existing services'
                  ]
                },
                {
                  title: 'Operational Support',
                  color: '#92D050',
                  descriptions: [
                    'Supply chain strategy, cost reduction, business model transformation, and process optimization'
                  ]
                },
                {
                  title: 'Financial Analysis',
                  color: '#7030A0',
                  descriptions: [
                    'Analyzing financial statements and examining performance'
                  ]
                }
              ]
            },

          ]
        },


      ]
    }
  },


  MEMBERS: {
    TITLE: "MEMBERS",
    DESCRIPTION: "",
    MAIN: {
      CARDS: [
        
        // HAYOON
        {
          color: '#92D050',
          selected: false,
          data: {
            team: ['all', 'strategy'],
            name: 'Hayoon Jang',
            profile_img_src: ImageTable.PROFILE_IMAGE.JAEYOUNG_LEE.NORMAL,
            university: 'Erasmus University of Rotterdam',
            major: 'International Business Administration',
            positions: ['PRESIDENT', 'HEAD of STRATEGY'],
            contact: {
              email: 'oylimpus@naver.com',
              mobile: '010-4430-0796(+31 619952056)'
            },
            career: [
              'GeroSalud Strategic Business Planning Intern'
              , 'YOOWON Inc (Textile Machine Trading Agency) Sales Intern'
            ]
          }
        },

        // JAEYOUNG
        {
          color: '#92D050',
          selected: false,
          data: {
            team: ['all', 'management'],
            name: 'Jaeyoung Lee',
            profile_img_src: ImageTable.PROFILE_IMAGE.JAEYOUNG_LEE.NORMAL,
            university: 'Georgia Institute of Technology',
            major: 'Computer Science',
            positions: ['PRESIDENT', 'HEAD of STRATEGY'],
            contact: {
              email: 'oylimpus@naver.com',
              mobile: '010-4430-0796(+31 619952056)'
            },
            career: [
              'GeroSalud Strategic Business Planning Intern'
              , 'YOOWON Inc (Textile Machine Trading Agency) Sales Intern'
            ]
          }
        }

      ]
    }
  }
}