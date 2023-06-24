module.exports = {
  siteMetadata: {
    title: `dse`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `DSE`,
        short_name: `DSE`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: 'src/assets/images/icon.svg',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
}
