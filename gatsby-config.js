if (!process.env.NOW) {
  require('dotenv').config({
    path: '.env.local'
  })
}

const siteMetadata = {
  title: 'Site Name'
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GRAPHCMS',
        fieldName: 'graphCmsData',
        url: 'https://api.github.com/graphql',
        url: process.env.GATSBY_SOURCE_GRAPHQL
      }
    }
  ]
}
