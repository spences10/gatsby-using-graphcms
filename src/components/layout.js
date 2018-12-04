import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import { theme1, media, GlobalStyle } from '../theme/globalStyle'

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  font-family: ${({ theme }) => theme.fontBody};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
  ${media.giant`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. . m m m m m m m m . .'
      'f f f f f f f f f f f f';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. m m m m m m m m m m .'
      'f f f f f f f f f f f f';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      '. m m m m m m m .'
      'f f f f f f f f f';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    /* background: palevioletred; */
  `};
`

const Wrapper = styled.div`
  grid-area: m;
`

const Layout = ({ children, data }) => {
  // const { edges: navItems } = data.allNavigationLink

  // console.log('====================')
  // console.log(navItems)
  // console.log('====================')

  return (
    <ThemeProvider theme={theme1}>
      <AppStyles>
        <GlobalStyle />
        <Helmet>
          <html lang="en-GB" />
        </Helmet>
        <Header />
        <Wrapper>{children}</Wrapper>
      </AppStyles>
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
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
