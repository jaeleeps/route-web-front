import { ImageTable } from "./ImageTable";

export const EnglishStringTable = {
  ABOUT: {
    TITLE: 'ABOUT US',
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
    BROCHURE: {
      DOWNLOAD_TITLE_TEXT: 'DOWNLOAD BROCHURE',
      ENGLISH_DOWNLOAD_TEXT: 'ENGLISH',
      KOREAN_DOWNLOAD_TEXT: 'KOREAN'
    },
    MAIN: {
      CARDS: [
        {
          TITLE: "MARKET RESEARCH",
          LINE_COLOR: "#92D050",
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
          LINE_COLOR: "#24B0F0",
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
          LINE_COLOR: "#7030A0",
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
                  type: "normal",
                  color: "#92D050",
                  descriptions: [
                    "Market Strategy Competitor analysis, funding models, and data collection",
                  ],
                },
                {
                  title: "Marketing and Reaching Customers through Media",
                  color: "#7030A0",
                  type: "normal",
                  descriptions: [
                    "Social Media impact measurement, website and user experience design, general marketing strategy, and customer analytics",
                  ],
                },
                {
                  title: "Market Entry and Expansion",
                  color: "#24B0F0",
                  type: "normal",
                  descriptions: [
                    "Go-to-market strategy for new products and services, Expanding market for existing services",
                  ],
                },
                {
                  title: "Operational Support",
                  color: "#92D050",
                  type: "normal",
                  descriptions: [
                    "Supply chain strategy, cost reduction, business model transformation, and process optimization",
                  ],
                },
                {
                  title: "Financial Analysis",
                  color: "#7030A0",
                  type: "normal",
                  descriptions: [
                    "Analyzing financial statements and examining performance",
                  ],
                },
              ],
            },
          ],
        },

        {
          TITLE: "PROJECT CONCLUSION",
          LINE_COLOR: "#92D050",
          CONTENTS: [
            {
              type: "paragraph",
              items: [
                "Upon finalization of the project, a set of deliverables are presented to you. In the process of finalizing solutions, we revise our solutions to reflect your feedback.",
                "We help with operational support, so that solutions can subsequently be implemented to your company.",
              ],
            },
            {
              type: "subtitle",
              items: [`Deliverables`],
            },
            {
              type: "block",
              items: [
                {
                  title: "Working Progress Report",
                  type: "single",
                  color: "#92D050",
                },
                {
                  title: "Finalized Solution Report",
                  type: "single",
                  color: "#7030A0",
                },
                {
                  title: "Additional Analysis",
                  type: "single",
                  color: "#24B0F0",
                },
                {
                  title: "Revised Solution after feedback",
                  type: "single",
                  color: "#92D050",
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
          color: "#7030A0",
          selected: false,
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
              "GeroSalud Strategic Business Planning",
              "YOOWON Inc (Textile Machine Trading Agency) Sales Intern",
            ],
          },
        },
        {
          color: "#24B0F0",
          selected: false,
          data: {
            team: ["all", "finance"],
            name: "Stella Rim",
            profile_img_src: ImageTable.PROFILE_IMAGE.STELLA_RIM.NORMAL,
            university: "University of Chicago",
            major: "B.A. in Economics and Art History",
            positions: ["Vice President", "Auditor"],
            contact: {
              email: "stellar@uchicago.edu",
              mobile: "010-7135-5898",
            },
            career: [
              "Seoul Art Space WATT Nonprofit Gallery Accountant Intern",
              "New York Painting Inspiration Project Organizer",
            ],
          },
        },
        {
          color: "#24B0F0",
          selected: false,
          data: {
            team: ["all", "finance"],
            name: "Jeong Whan Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.JEONGWHAN_LEE.NORMAL,
            university: "University of Chicago",
            major: "B.A. in Economics w/ Data Science",
            positions: ["Head of Finance Team"],
            contact: {
              email: "zycon@uchicago.edu",
              mobile: "010-5772-4411",
            },
            career: [
              "KPMG Deal Advisory Intern",
              "BCG Research Analyst",
              "CFA Level 1",
            ],
          },
        },
        {
          color: "#92D050",
          selected: false,
          data: {
            team: ["all", "management"],
            name: "Jaeyoung Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.JAEYOUNG_LEE.NORMAL,
            university: "Georgia Institute of Technology",
            major: "B.S. in Computer Science",
            positions: ["Head of Management Team"],
            contact: {
              email: "jaeleeps@gmail.com",
              mobile: "010-2309-4277",
            },
            career: [
              "Naver D2 - CampusQ Student Developer",
              "Jaranda Full-time Fullstack Developer",
            ],
          },
        },
        {
          color: "#7030A0",
          selected: false,
          data: {
            team: ["all", "strategy"],
            name: "Minji Song",
            profile_img_src: ImageTable.PROFILE_IMAGE.MINJI_SONG.NORMAL,
            university: "Yonsei University",
            major: "B.A. in Business, Chinese Studies",
            positions: ["Strategy Analyst"],
            contact: {
              email: "mjs9001@yonsei.ac.kr",
              mobile: "010-3022-6315",
            },
            career: [
              "Finstep Asia Digital Marketing Intern",
              "Fiserv Project Consultant",
            ],
          },
        },
        {
          color: "#7030A0",
          selected: false,
          data: {
            team: ["all", "strategy"],
            name: "Clare Ha",
            profile_img_src: ImageTable.PROFILE_IMAGE.CLARE_HA.NORMAL,
            university: "The Wharton School",
            major: "B.S. in Finance and Business Analytics",
            positions: ["Strategy Analyst"],
            contact: {
              email: "clare9923@gmail.com",
              mobile: "010-4430-0796",
            },
            career: [
              "ACE I&M Investment Team Summer Analyst",
              "Gracewater Capital Investment Banking (M&A) Analyst",
            ],
          },
        },
        // FINANCE

        {
          color: "#24B0F0",
          selected: false,
          data: {
            team: ["all", "finance"],
            name: "Soo Ji Kim",
            profile_img_src: ImageTable.PROFILE_IMAGE.SOOJI_KIM.NORMAL,
            university: "Korea University",
            major: "B.A. in Business",
            positions: ["Auditor"],
            contact: {
              email: "cjsooji@naver.com",
              mobile: "010-8897-2634",
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
          selected: false,
          data: {
            team: ["all", "management"],
            name: "Somin Lee",
            profile_img_src: ImageTable.PROFILE_IMAGE.SOMIN_LEE.NORMAL,
            university: "Seoul National University",
            major: "B.A. in Sociology and Chinese Studies",
            positions: ["Social Media Manager"],
            contact: {
              email: "cindy99324@snu.ac.kr",
              mobile: "010-7734-1617",
            },
            career: [
              "KSCY Conference Press Division Facilitator",
              "Director of Humans of SNU",
            ],
          },
        },
        {
          color: "#92D050",
          selected: false,
          data: {
            team: ["all", "management"],
            name: "Hyeon A Choo",
            profile_img_src: ImageTable.PROFILE_IMAGE.HYEONA_CHOO.NORMAL,
            university: "Korea University",
            major: "B.A. in Media & Communication",
            positions: ["IT Manager"],
            contact: {
              email: "5161114@naver.com",
              mobile: "010-9602-8575",
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

  PROJECTS: {
    TITLE: "PROJECTS",
    DESCRIPTION: "",
    MAIN: {
      PARAGRAPHS: [
        {
          type: "text",
          contents: [
            "ROUTE welcomes any clients who need a new perspective of review or advice on the management of their business. We pursue a partner-like relationship with our clients through active communication to solve problems and share new ideas.",
          ],
        },
        {
          type: "list",
          contents: [
            `Have you ever struggled with building market strategy?`,
            `Wondering how to reduce cost and maximize profit?`,
            `Have you ever failed targeting and reaching out to your customers through media? `,
            `Do you need effective data analysis?`,
            `Are you struggling with market entry?`,
            `Do you need structured operational support?`,
            `Do you want things to be “ROI positive.”?`,
          ],
        },
        {
          type: "text",
          contents: [
            "If any of these apply to your situation, contact us to be our partner and scale your business.",
          ],
        },
      ],
    },
  },

  CONTACT: {
    TITLE: "CONTACT",
    DESCRIPTION: "",
    MAIN: {
      CARDS: [
        {
          color: "#0E76A8",
          selected: false,
          data: {
            title: 'LinkedIn',
            hasUrl: true,
            hashNav: '/linkedin',
            url: 'https://www.linkedin.com/company/route-consulting-group'
          },
        },
        {
          color: "#3B5998",
          selected: false,
          data: {
            title: 'Facebook',
            hasUrl: true,
            hashNav: '/facebook',
            url: 'https://www.facebook.com/Route-102109138324421/?ref=settings'
          },
        },
        {
          color: "#C32AA3",
          selected: false,
          data: {
            title: 'Instagram',
            hasUrl: true,
            hashNav: '/instagram',
            url: 'https://instagram.com/route_consulting_group?igshid=mgml7n30cynp'
          },
        },
        {
          color: "#92D050",
          selected: false,
          data: {
            title: 'Email',
            hasUrl: false,
            hashNav: '',
            url: '',
            email: 'oylimpus@naver.com'
          },
        },
      ],
    },
  },
};
