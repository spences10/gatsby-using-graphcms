const path = require(`path`)
const queryAll = require(`./gatsby/queryAll.js`)

exports.onCreateNode = ({ node }) => {
  console.log(`onCreateNode:`, node.internal.type)
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pageDetailTemplate = path.resolve(
      `./src/templates/pageDetail.js`
    )

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // console.log('=====================')
        // console.log(result.data.allPage.edges)
        // console.log('=====================')

        const pages = result.data.allPage.edges
        pages.map(({ node: page }) => {
          const path = `/${page.pageNameSlug}`
          console.log('=====================')
          console.log(path)
          console.log('=====================')
          createPage({
            path,
            component: pageDetailTemplate,
            context: {
              slug: page.pageNameSlug
            }
          })
        })

        // pages.forEach(node => {
        //   const path = `/` + node.page.slug
        //   createPage({
        //     path,
        //     component: pageDetailTemplate,
        //     context: {
        //       slug: node.page.slug
        //     }
        //   })
        // })

        // const records = result.data.allRecord.edges
        // records.forEach(node => {
        //   const path = `records/` + node.record.slug
        //   createPage({
        //     path,
        //     component: recordDetailPageTemplate,
        //     context: {
        //       slug: node.record.slug
        //     }
        //   })
        // })

        // const reviews = result.data.allReview.edges
        // reviews.forEach(node => {
        //   const path = `reviews/` + node.review.slug
        //   createPage({
        //     path,
        //     component: reviewDetailPageTemplate,
        //     context: {
        //       slug: node.review.slug
        //     }
        //   })
        // })
      })
    )
  })
}
