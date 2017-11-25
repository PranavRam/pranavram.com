module.exports = {
  siteMetadata: {
    title: `Pranav Ram - Software Craftsman & Data Visualizer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
  pathPrefix: '/',
}
