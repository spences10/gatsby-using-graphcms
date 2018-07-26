if (!process.env.NOW) {
  require('dotenv').config({
    path: '.env.local'
  })
}

module.exports = {
  siteMetadata: {
    title: 'Site Name'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ID,
        token: process.env.GRAPHCMS_TOKEN,
        query: require('./gatsby/configQuery')
      }
    }
  ]
}
