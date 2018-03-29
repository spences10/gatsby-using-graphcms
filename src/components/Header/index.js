import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import PageNav from './PageNav'

const HeaderWrapper = styled.div`
  grid-area: h;
  background: ${props => props.theme.primary};
  margin-bottom: 1.45rem;
  margin: '0 auto';
  maxwidth: 960;
  padding: '1.45rem 1.0875rem';
`

const StyledHeader = styled.h1``

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const Header = props => (
  <HeaderWrapper>
    <StyledHeader>
      <StyledHeader style={{ margin: 0 }}>
        <BrandLink to="/">NCSC</BrandLink>
      </StyledHeader>
    </StyledHeader>
    <PageNav navItems={props.navItems} />
  </HeaderWrapper>
)

export default Header
