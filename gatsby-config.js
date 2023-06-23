module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sashithachamara.com/`,
    // Your Name
    name: 'Sashitha Chamara',
    // Main Site Title
    title: `Sashitha Chamara | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Entrepreneur • Full stack developer • Traveler`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/sashithacj`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sashithachamara/`,
    // Content of the About Me section
    about: `Enthusiastic Software / Mobile Apps developer who is keen to explore the newest in the field of technology with 6+ years experience. Hope to be an artisan for Software Engineering.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ReactNativeCmdEase',
        description:
          'React native project manager written in C#',
        link: 'https://github.com/sashithacj/ReactNativeCmdEase',
      },
      {
        name: 'Screen Recorder',
        description:
          'Screenshot capturing and screen video recording All-in-one program written in C#',
        link: 'https://github.com/sashithacj/ScreenRecorderBySashitha',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Avonet Technologies, Kent Town, Australia',
        description: 'Senior Software Engineer (React Native), June 2023 - Present',
        link: '',
      },
      {
        name: 'Yara Technologies (PVT) Ltd, Narahenpita, Sri Lanka',
        description: 'Senior Software Engineer (Frontend), January 2022 - June 2023',
        link: '',
      },
      {
        name: 'NextGen Apps LLC, Maryland, United States',
        description: 'CEO, Lead Developer Remote, September 2020 - December 2021',
        link: '',
      },
      {
        name: 'Lak United Associate (PVT) LTD, Wattala, Sri Lanka',
        description: 'Mobile Application Developer, February 2019 - July 2020',
        link: '',
      },
      {
        name: 'WORA Solutions (PVT) LTD, Negombo, Sri Lanka',
        description: 'Software Engineer Trainee, September 2018 - November 2018',
        link: '',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'React, React Native, Angular, PHP (Laravel), JavaScript (ES6+), Golang, Node.js, Python, C#',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
