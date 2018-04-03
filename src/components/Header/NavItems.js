import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../../theme/globalStyle'

import { Dump, slugIt } from '../../utils/helpers'

const NavMenu = styled.ul`
  grid-area: ni; /* NavItem */
  display: inline-grid;
  grid-template-columns: repeat(7, auto);
  grid-column-gap: 10px;
  margin: 0rem;
  padding: 0rem;
  justify-self: start;
  align-self: center;
`

const NavItem = styled.li`
  transition: all 0.3s;
  text-transform: capitalize;
  list-style: none;
  color: ${props => props.theme.light};
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
  /* &:hover {
    letter-spacing: 0.25rem;
    transition: all 0.3s;
  } */
  margin: 0rem;
  padding: 0rem;
`

const NavLink = styled(Link).attrs({
  color: props => props.theme.secondary
})`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.danger};
  }
  &.activeLink {
    color: ${props => props.theme.primary};
  }
  text-decoration: none;
`

const PageNav = ({ navItems }) => (
  <NavMenu>
    {navItems.map((item, index) => {
      const navItem = item.node || item
      const { topLevelNavItem } = item.node || item
      if (topLevelNavItem) {
        return (
          <NavItem key={index}>
            <NavLink to={`/${slugIt(navItem.name)}`}>
              {/* <Dump navItem={navItem.subNavItems} /> */}
              {navItem.name}
              {navItem.subNavItems && <Nav navItems={subNavItems} />}
            </NavLink>
          </NavItem>
        )
      }
    })}
  </NavMenu>
)

export default PageNav
