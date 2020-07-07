module.exports = {
  siteMetadata: {
    title: `Andreas Weis — Product designer and frontend developer`,
    description: `Personal website of Andreas Weis`,
    author: `@andi_weis`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://andreasweis.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
