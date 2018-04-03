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

const EducationResearchPage = () => (
  <PageWrapper>
    <PageContent>
      <h1>Hi from the Education Research page</h1>
      <p>Welcome to page Education Research</p>
      <Link to="/">Go back to the homepage</Link>
    </PageContent>
  </PageWrapper>
)

export default EducationResearchPage
