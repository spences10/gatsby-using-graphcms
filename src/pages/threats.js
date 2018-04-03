import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { columns } from '../theme/globalStyle'

const PageWrapper = styled.div`
  display: grid;
  grid-area: m;
  grid-template-columns: repeat(${columns.giant}, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. pc pc pc pc pc pc pc pc pc pc .';
`

const PageContent = styled.div`
  grid-area: pc; /* Threats Content */
`

const ThreatsPage = () => (
  <PageWrapper>
    <PageContent>
      <h1>Hi from the Threats page</h1>
      <p>Welcome to page Threats</p>
      <Link to="/">Go back to the homepage</Link>
    </PageContent>
  </PageWrapper>
)

export default ThreatsPage
