'use strict'

module.exports = `
  {
    allAssets {
      size
      url
      height
      fileName
      mimeType
      id
      width
    }

    allBlogPosts {
      id
      body
      createdAt
    }

    allEvents {
      id
      title
      
    }

    allNavigationLinks {
      id
      name
      topLevelNavItem
      parentNavLink {
        id
        name
      }
      subNavLinks {
        id
        name
      }
    }

    allPages {
      edges {
        node {
          id
          pageTitle
          isPublished
          pageName
          headerImage {
            id
            fileName
            url
          }
          pageNameSlug
        }
      }
    }

  }
`
