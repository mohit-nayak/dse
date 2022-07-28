module.exports = {
  siteMetadata: {
    title: `dse`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`
  ],
}
