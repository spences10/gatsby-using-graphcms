const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/templates/pageTemplate.js')
  return graphql(`
    {
      graphCmsData {
        navigationLinks {
          id
          page {
            id
            pageNameSlug
            status
            pageContent
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pages = result.data.graphCmsData.navigationLinks

    // Create pages for each markdown file.
    pages.forEach(page => {
      createPage({
        path: page.page.pageNameSlug,
        component: pageTemplate,
        context: {
          path: page.page.pageNameSlug
        }
      })
    })

    return pages
  })
}
