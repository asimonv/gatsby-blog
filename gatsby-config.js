module.exports = {
  siteMetadata: {
    defaultTitle: "@asimonv",
    defaultAuthor: "Andre Simon @asimonv",
    defaultLang: "en",
    defaultImage: '/me-c.jpg',
    title: "@asimonv",
    siteUrl: `https://asimonv.dev`,
    titleTemplate: "%s | @asimonv",
    twitterUsername: "asimonv",
    defaultDescription: 'HELLO-O-O-O. Andre Simon @asimonv Software Engineer'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `dominantColor`,
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
  ],
};
