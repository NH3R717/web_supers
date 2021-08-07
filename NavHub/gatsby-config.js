/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Supers Cafe",
    description: "Supers Cafe – A Life/Professional Portfolio Site",
    author: "@nh3r717",
    siteUrl: "https://supers.cafe",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        usePreload: true,
        fonts: {
          google: [
            {
              family: "Hind",
              variants: ["regular"],
              fontDisplay: "block",
              strategy: "selfHosted",
            },
          ],
        },
        formatAgents: {
          woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
          woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
          ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        },
      },
    },
  ],
}
