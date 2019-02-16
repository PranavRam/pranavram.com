module.exports = {
  siteMetadata: {
    title: `Pranav Ram - Software Craftsman & Data Visualizer`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133335032-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10
        // cookieDomain: 'pranavram.com'
      }
    }
  ],
  pathPrefix: '/'
};
