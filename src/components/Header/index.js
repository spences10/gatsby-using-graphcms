import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from './Navigation'
import NavItems from './NavItems'

const HeaderWrapper = styled.div`
  grid-area: h;
  background: ${props => props.theme.light};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. brand brand brand . . . . . . . .'
    '. nav nav nav nav nav nav nav nav nav nav .';
`

const StyledHeader = styled.h1`
  grid-area: brand;
  color: ${props => props.theme.dark};
`

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.danger};
  }
  text-decoration: none;
`

const Header = props => (
  <HeaderWrapper>
    <StyledHeader>
      <BrandLink to="/">NCSC</BrandLink>
    </StyledHeader>
    <Navigation navItems={props.navItems} />
    <NavItems navItems={props.navItems} />
  </HeaderWrapper>
)

export default Header
