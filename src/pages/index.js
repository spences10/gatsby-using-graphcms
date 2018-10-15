import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { columns } from '../theme/globalStyle'

const ComponentWrapper = styled.div`
  grid-area: m;
  display: grid;
  grid-template-columns: repeat(${columns.giant}, 1fr);
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
    links: allNavigationLink {
      edges {
        node {
          id
          name
          pageSlug {
            id
            pageNameSlug
          }
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

// picture background colour
// background: rgba(5,29,73,.85);
