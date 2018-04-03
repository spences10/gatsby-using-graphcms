import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
  grid-area: m;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. main main main main .'; /* MAIN */
`

const PageContent = styled.div`
  grid-area: main;
`

class IndexPage extends React.Component {
  render() {
    return (
      <ComponentWrapper>
        <PageContent>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </PageContent>
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
