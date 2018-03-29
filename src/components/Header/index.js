import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PageNav from './PageNav'

const HeaderWrapper = styled.div`
  background: ${props => props.theme.primary};
  margin-bottom: 1.45rem;
`

const Header = props => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          NCSC
        </Link>
      </h1>
    </div>
    <PageNav navItems={props.navItems} />
  </HeaderWrapper>
)

export default Header
