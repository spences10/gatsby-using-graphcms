import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../../theme/globalStyle'

import { Dump } from '../../helpers'

const NavMenu = styled.ul`
  grid-area: n;
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 10px;
  margin: 1.5rem 0.1rem 1.5rem 0.1rem;
  padding: 1.5rem 0.1rem 1.5rem 0.1rem;
`

const NavItem = styled.li`
  transition: all 0.3s;
  text-transform: uppercase;
  list-style: none;
  color: ${props => props.theme.primary};
  &:hover {
    letter-spacing: 0.25rem;
    transition: all 0.3s;
  }
  /* padding: 0.5rem; */
`

const NavLink = styled(Link).attrs({
  color: props => props.theme.primary
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
`

const PageNav = ({ navItems }) => (
  <NavMenu>
    <Dump navItems={navItems} />
    {navItems.map((item, index) => {
      const navItem = item.node || item
      return (
        <NavItem key={index}>
          <NavLink to={`/${navItem.name}`}>
            {navItem.name}
            {/* {navItem.subNavItems && <Nav navItems={subNavItems} />} */}
          </NavLink>
        </NavItem>
      )
    })}
  </NavMenu>
)
// const PageNav = ({ nav }) => {
//   const items = [...nav.navItems]
//   return (
//     <NavMenu>
//       {console.log(items)}
//       {Object.keys(nav.navItems).map(item => console.log(item))}
//     </NavMenu>
//   )
// }

// {Object.keys(nav).map((item, index) => (
//   <NavItem key={index}>
//     <NavLink to={`/${item}`} activeClassName="activeLink">
//       {item}
//     </NavLink>
//   </NavItem>
// ))}

// PageNav.propTypes = {
//   nav: PropTypes.array.isRequired
// }

export default PageNav
