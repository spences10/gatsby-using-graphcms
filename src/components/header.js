import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Dump from './dump'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Headline = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle, data }) => {
  const { navigationLinks } = data.graphCmsData
  return (
    <HeaderWrapper>
      <Headline>
        <h1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
        {navigationLinks.map(name => {
          const { id, pageName, pageNameSlug } = name.page
          return (
            <>
              <Link key={id} to={pageNameSlug}>
                {pageName}
              </Link>
            </>
          )
        })}
      </Headline>
    </HeaderWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query NAVIGATION_LINKS_QUERY {
        graphCmsData {
          navigationLinks {
            id
            navigationName
            page {
              id
              pageName
              pageNameSlug
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
