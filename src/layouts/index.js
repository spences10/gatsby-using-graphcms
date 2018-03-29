import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import { theme1, media } from '../theme/globalStyle'
import siteMeta from '../utils/siteMeta'

const PageWrapper = styled.div`
  display: grid;
  background: ${props => props.theme.light};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h' /* HEADER */
    'm m m m m m m m m m m m' /* MAIN */
    'f f f f f f f f f f f f'; /* FOOTER */
`

const Main = styled.div`
  grid-area: m;
`

const TemplateWrapper = ({ children, data }) => {
  const { edges: navItems } = data.allNavigationLinks

  // console.log('====================')
  // console.log(navItems)
  // console.log('====================')

  return (
    <ThemeProvider theme={theme1}>
      <PageWrapper>
        <Helmet title={siteMeta.title} meta={siteMeta} />
        <Header navItems={navItems} />

        <Main>{children()}</Main>
      </PageWrapper>
    </ThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query NavItems {
    allNavigationLinks {
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
