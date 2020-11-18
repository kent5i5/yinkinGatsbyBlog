/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yinkin Full Stack Developer Tutorials`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `babel-plugin-emotion` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Available options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: `png`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //     failOnError: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    
  ],
}
