import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import { theme1 } from '../theme/globalStyle'
import siteMeta from '../utils/siteMeta'

const PageWrapper = styled.div``

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

        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          {children()}
        </div>
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
