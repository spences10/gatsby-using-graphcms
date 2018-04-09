require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
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
