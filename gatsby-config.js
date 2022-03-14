module.exports = {
  siteMetadata: {
    title: "@asimonv",
    siteUrl: `https://asimonv.dev`,
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
