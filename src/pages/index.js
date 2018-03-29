import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
  grid-area: m;
`

class IndexPage extends React.Component {
  render() {
    return (
      <ComponentWrapper>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </ComponentWrapper>
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
