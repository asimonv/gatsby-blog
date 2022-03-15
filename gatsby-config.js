module.exports = {
  siteMetadata: {
    defaultTitle: "Andre Simon's Personal Website",
    defaultAuthor: "Andre Simon @asimonv",
    defaultLang: "en",
    defaultImage: '/me-c.jpg',
    title: "@asimonv",
    siteUrl: `https://asimonv.dev`,
    titleTemplate: "%s | @asimonv",
    twitterUsername: "asimonv",
    defaultDescription: 'Senior Software Engineer @ Microsoft'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andre Simon's Personal Website`,
        short_name: `Andre Simon's Personal Website`,
        start_url: `/`,
        icon: `static/me-c.png`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
  ],
};
