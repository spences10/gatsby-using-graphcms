import React from 'react'
import styled from 'styled-components'

import NavItems from './NavItems'

const ComponentWrapper = styled.div`
  grid-area: h;
  background: ${props => props.theme.primary};
`

const Navigation = ({ navItems }) => {
  return (
    <ComponentWrapper>
      <NavItems navItems={navItems} />
    </ComponentWrapper>
  )
}

export default Navigation
