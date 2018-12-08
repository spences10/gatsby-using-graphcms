import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Dump from '../components/dump'

const Page = ({ data }) => {
  return (
    <Layout>
      <Dump data={data} />
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($pageSlug: String!) {
    graphCmsData {
      pages(where: { pageNameSlug: $pageSlug }) {
        id
        pageName
        pageDescription
        headerImage {
          id
          url
        }
        pageNameSlug
        pageContent
        navigationLink {
          id
          navigationName
        }
      }
    }
  }
`
