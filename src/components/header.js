import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

// import Dump from './dump'

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
    padding: 10px 10px;
  }
  a {
    color: white;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  :before {
    content: '|';
    padding: 0 10px;
    color: ${props => props.theme.secondary};
  }
  :last-child {
    :after {
      content: '|';
      padding: 0 10px;
      color: ${props => props.theme.secondary};
    }
  }
`

// const NavContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
// `

const Header = ({ siteTitle, data }) => {
  const { navigationLinks } = data.graphCmsData
  return (
    <HeaderWrapper>
      <Headline>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {navigationLinks.map(name => {
          const { id, pageName, pageNameSlug } = name.page
          return (
            <>
              <StyledLink key={id} to={pageNameSlug}>
                {pageName}
              </StyledLink>
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
            topLevelNavItem
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
