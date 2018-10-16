import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import { theme1, columns, GlobalStyle } from '../theme/globalStyle'
import siteMeta from '../utils/siteMeta'

const PageWrapper = styled.div`
  display: grid;
  background: ${props => props.theme.light};
  grid-template-columns: repeat(${columns.giant}, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h' /* HEADER */
    'm m m m m m m m m m m m' /* MAIN */
    'f f f f f f f f f f f f'; /* FOOTER */
`

const Main = styled.div`
  grid-area: m;
`

const Layout = ({ children, data }) => {
  const { edges: navItems } = data.allNavigationLink

  // console.log('====================')
  // console.log(navItems)
  // console.log('====================')

  return (
    <ThemeProvider theme={theme1}>
      <GlobalStyle />
      <PageWrapper>
        <Helmet title={siteMeta.title} meta={siteMeta} />
        <Header navItems={navItems} />

        <Main>{children}</Main>
      </PageWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutData {
        allNavigationLink {
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
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
