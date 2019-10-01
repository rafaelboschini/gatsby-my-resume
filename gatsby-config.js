module.exports = {
  pathPrefix: "/gatsby-my-resume",
  siteMetadata: {
    title: `Gatsby - My Resume Example`,
    description: `A simple example of my resume in Gatsby / React`,
    author: `rafaelboschini`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-rboschini-resume`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00ff00`,
        theme_color: `#00ff00`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}
