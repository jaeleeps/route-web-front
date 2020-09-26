import { ImageTable } from "./ImageTable";

export const StringTable = {
  ABOUT: {
    TITLE: {},
    MAIN: {
      PARAGRAPHS: [
        {
          ALL:
            "ROUTE is a non-profit student consulting group that provides non-profit consulting services to small businesses and startups that need strategic consulting.",
          HIGHLIGHT: "ROUTE",
          highlight_color: "#92D050",
          NORMAL:
            " is a non-profit student consulting group that provides non-profit consulting services to small businesses and startups that need strategic consulting.",
        },
        {
          ALL:
            "ROUTE refers to the optimal route in the process of transmitting communication data within a network. Therefore, ROUTE aims to utilize our analytical ability and creativity to help our clients to reach their target audience more effectively through the optimal route we suggest.",
          HIGHLIGHT: "ROUTE",
          highlight_color: "#7030A0",
          NORMAL:
            " refers to the optimal route in the process of transmitting communication data within a network. Therefore, ROUTE aims to utilize our analytical ability and creativity to help our clients to reach their target audience more effectively through the optimal route we suggest.",
        },
        {
          ALL:
            "MEMBERS of ROUTE are passionate domestic/international students who are studying in various majors and actively participating in diverse activities to gain experience. Through the eyes of these students, ROUTE provides strategically helpful insights and solutions to our clients while enabling our members to acquire practical experiences. To conclude, ROUTE pursues a complementary relationship with our clients based on active communication and cooperation.",
          HIGHLIGHT: "MEMBERS of ROUTE",
          highlight_color: "#24B0F0",
          NORMAL:
            " are passionate domestic/international students who are studying in various majors and actively participating in diverse activities to gain experience. Through the eyes of these students, ROUTE provides strategically helpful insights and solutions to our clients while enabling our members to acquire practical experiences. To conclude, ROUTE pursues a complementary relationship with our clients based on active communication and cooperation.",
        },
      ],
    },
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
                `Our working process involves providing our clients a carefully coordinated market research.`,
                `The market research will be based on SEPTEmber(Social / Economic / Political / Technological / Environmental) Analysis of the client-relevant industry and ROUTE will also provide market segmentation analysis to facilitate the stakeholder return process.`,
                `In addition to the above, ROUTE will also provide competitor and customer needs analysis.`,
              ],
            },
          ],
        },

        {
          TITLE: "DATA ANALYTICS",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                `For the best business strategy recommendation, ROUTE will provide an in-depth analysis of our client’s internal structure and performance.`,
                `Some of the analytics that the organization will provide, but are not limited to, the following: accounting, asset management, sales performance, forecasting.`,
              ],
            },
          ],
        },

        {
          TITLE: "STRATEGY RECOMMENDATION",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                `Our goal is to provide customized consulting services. Therefore, we are willing to give a strategic recommendation for any challenges our client firms are facing. We focus on scoping projects that can address our clients' unique situations including those listed below. `,
              ],
            },
            {
              type: "subtitle",
              items: [`Examples of Our Services`],
            },
            {
              type: "block",
              items: [
                {
                  title: "Building Market Strategy",
                  color: "#92D050",
                  descriptions: [
                    "Market Strategy Competitor analysis, funding models, and data collection",
                  ],
                },
                {
                  title: "Marketing and Reaching Customers through Media",
                  color: "#7030A0",
                  descriptions: [
                    "Social Media impact measurement, website and user experience design, general marketing strategy, and customer analytics",
                  ],
                },
                {
                  title: "Market Entry and Expansion",
                  color: "#24B0F0",
                  descriptions: [
                    "Go-to-market strategy for new products and services, Expanding market for existing services",
                  ],
                },
                {
                  title: "Operational Support",
                  color: "#92D050",
                  descriptions: [
                    "Supply chain strategy, cost reduction, business model transformation, and process optimization",
                  ],
                },
                {
                  title: "Financial Analysis",
                  color: "#7030A0",
                  descriptions: [
                    "Analyzing financial statements and examining performance",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  MEMBERS: {
    TITLE: "MEMBERS",
    DESCRIPTION: "",
    MAIN: {
      CARDS: [
        // ST
        {
          color: "#24B0F0",
          selected: true,
          data: {
            team: ["all", "strategy"],
            name: "Hayoon Jang",
            profile_img_src: ImageTable.PROFILE_IMAGE.HAYOON_JANG.NORMAL,
            university: "Erasmus University of Rotterdam",
            major: "International Business Administration",
            positions: ["PRESIDENT", "HEAD of STRATEGY"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "GeroSalud Strategic Business Planning Intern",
              "YOOWON Inc (Textile Machine Trading Agency) Sales Intern",
            ],
          },
        },
        {
          color: "#24B0F0",
          selected: true,
          data: {
            team: ["all", "strategy"],
            name: "Minji Song",
            profile_img_src: ImageTable.PROFILE_IMAGE.MINJI_SONG.NORMAL,
            university: "Yonsei University",
            major: "B.A. in Business, Chinese Studies",
            positions: ["Strategy Analyst"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "Finstep Asia Digital Marketing Intern",
              "Fiserv Project Consultant",
            ],
          },
        },
        {
          color: "#24B0F0",
          selected: true,
          data: {
            team: ["all", "strategy"],
            name: "Clare Ha",
            profile_img_src: ImageTable.PROFILE_IMAGE.CLARE_HA.NORMAL,
            university: "The Wharton School",
            major: "B.S. in Finance and Business Analytics",
            positions: ["Strategy Analyst"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "ACE I&M Investment Team Summer Analyst",
              "Gracewater Capital Investment Banking (M&A) Analyst",
            ],
          },
        },
        // FINANCE
        {
          color: "#7030A0",
          selected: true,
          data: {
            team: ["all", "finance"],
            name: "Stella Rim",
            profile_img_src: ImageTable.PROFILE_IMAGE.STELLA_RIM.NORMAL,
            university: "University of Chicago",
            major: "B.A. in Economics and Art History",
            positions: ["Vice President", "Auditor"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "Seoul Art Space WATT Nonprofit Gallery Accountant Intern",
              "New York Painting Inspiration Project Organizer",
            ],
          },
        },
        {
          color: "#7030A0",
          selected: true,
          data: {
            team: ["all", "finance"],
            name: "Jeong Whan Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.JEONGWHAN_LEE.NORMAL,
            university: "University of Chicago",
            major: "B.A. in Economics w/ Data Science",
            positions: ["Head of Finance Team"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "KPMG Deal Advisory Intern",
              "BCG Research Analyst",
              "CFA Level 1"
            ],
          },
        },
        {
          color: "#7030A0",
          selected: true,
          data: {
            team: ["all", "finance"],
            name: "Soo Ji Kim",
            profile_img_src: ImageTable.PROFILE_IMAGE.SOOJI_KIM.NORMAL,
            university: "Korea University",
            major: "B.A. in Business and Chinese Studies",
            positions: ["Auditor"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "NANABA Product Management Intern",
              "THE PLANET Producing Intern",
            ],
          },
        },        

        // MANAGEMENT
        {
          color: "#92D050",
          selected: true,
          data: {
            team: ["all", "management"],
            name: "Jaeyoung Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.JAEYOUNG_LEE.NORMAL,
            university: "Georgia Institute of Technology",
            major: "B.S. in Computer Science",
            positions: ["Head of Management Team"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "GeroSalud Strategic Business Planning Intern",
              "YOOWON Inc (Textile Machine Trading Agency) Sales Intern",
            ],
          },
        },
        {
          color: "#92D050",
          selected: true,
          data: {
            team: ["all", "management"],
            name: "Somin Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.SOMIN_LEE.NORMAL,
            university: "Seoul National University",
            major: "B.A. in Sociology",
            positions: ["Social Media Manager"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "KSCY Conference Press Division Facilitator",
              "Director of Humans of SNU",
            ],
          },
        },
        {
          color: "#92D050",
          selected: true,
          data: {
            team: ["all", "management"],
            name: "Hyeon A Choo",
            profile_img_src: ImageTable.PROFILE_IMAGE.HYEONA_CHOO.NORMAL,
            university: "Korea University",
            major: "B.A. in Media & Communication",
            positions: ["IT Manager"],
            contact: {
              email: "oylimpus@naver.com",
              mobile: "010-4430-0796(+31 619952056)",
            },
            career: [
              "Product Director of Korea University Television Systems KUTV",
              "Asia Culture Center Univ. Videographer",
              "Friends of MOFA Videographer",
            ],
          },
        },
      ],
    },
  },
};
