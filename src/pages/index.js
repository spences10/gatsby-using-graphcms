import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query getAllNavigationItems {
    links: allNavigationLinks {
      edges {
        node {
          id
          name
          parentNavLink {
            id
          }
          subNavLinks {
            id
          }
          topLevelNavItem
        }
      }
    }
  }
`
