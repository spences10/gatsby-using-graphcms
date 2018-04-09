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
  grid-area: pc; /* Guidance Content */
`

class PageDetail extends React.Component {
  render() {
    const page = this.props.data.product
    return (
      <PageWrapper>
        <PageContent>
          <h1>{page.pageTitle}</h1>
          <div>{page.pageDescription}</div>
          <Link to="/">Go back to the homepage</Link>
        </PageContent>
      </PageWrapper>
    )
  }
}

export default PageDetail

export const query = graphql`
  query PageDetails($pageId: String!) {
    page(id: { eq: $pageId }) {
      id
      pageTitle
      pageDescription
    }
  }
`
