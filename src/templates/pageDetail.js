import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { columns } from '../theme/globalStyle'
import { Dump } from '../utils/helpers'

const PageWrapper = styled.div`
  display: grid;
  grid-area: m;
  grid-template-columns: repeat(${columns.giant}, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. pc pc pc pc pc pc pc pc pc pc .';
`

const PageContent = styled.div`
  grid-area: pc; /* Page Content */
`

const HeaderImage = styled.img`
  /* border: 1px solid #000; */
  background-image: url(${props => props.src};);
`

class PageDetail extends React.Component {
  render() {
    const page = this.props.data.page
    return (
      <PageWrapper>
        <PageContent>
          {/* {console.log('=====DEBUG====', page)} */}
          {typeof page === 'undefined' ? (
            ''
          ) : (
            <div>
              <h1>{page.pageTitle}</h1>
              <div>{page.pageDescription}</div>
              {console.log(page.headerImage.url)}
              <HeaderImage src={page.headerImage.url} />
              <Dump props={page} />
              <Link to="/">Go back to the homepage</Link>
            </div>
          )}
        </PageContent>
      </PageWrapper>
    )
  }
}

export default PageDetail

export const PageDetailPageQuery = graphql`
  query getPageById($slug: String!) {
    page(pageNameSlug: { eq: $slug }) {
      id
      headerImage {
        id
        fileName
        url
      }
      isPublished
      pageName
      pageDescription
      pageNameSlug
      pageTitle
    }
  }
`
