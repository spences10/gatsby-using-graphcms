import React from 'react'
import styled from 'styled-components'

import NavItems from './NavItems'

const ComponentWrapper = styled.div`
  grid-area: n;
  background: ${props => props.theme.primary};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. ni ni ni ni ni ni ni ni ni ni .';
  height: 4rem;
`

const Navigation = ({ navItems }) => {
  return (
    <ComponentWrapper>
      <NavItems navItems={navItems} />
    </ComponentWrapper>
  )
}

export default Navigation
