'use strict'

module.exports = `
{
  allAssets {
    edges {
      node {
        id
        size
        url
        height
        width
        fileName
        mimeType
      }
    }
  }

  allBlogPost {
	  edges {
	    node {
	      id
        body
        createdAt
	    }
	  }
	}

  allEvent {
    edges {
      node {
        id
        title
      }
    }
  }

  allNavigationLink {
    edges {
      node {
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
    }
  }

  allPage {
    edges {
      node {
        id
        id
        headerImage {
          id
          fileName
          url
        }
        isPublished
        pageName
        pageDescription
        pageNameSlug
        pageTitle
      }
    }
  }

  query NavLinks ($topLevel: Boolean!) {
    allNavigationLink (filter: {topLevelNavItem:$topLevel}){
      name
      subNavLinks {
        name
      }
    }
  }

}
`
