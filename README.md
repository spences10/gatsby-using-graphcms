# GraphCMS navigation items with Gatsby

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![styled components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Intro

Example of using Gatsby for building content from GraphCMS, this
focuses on the ability to add and remove content from the nav bar and
build pages from the GraphCMS API

## Configuration

There's a lot of configuration on the CMS side that needs to be done
to achieved the desired result here

###### Bootstrapped with the default Gatsby starter.

## GraphCMS Schema

1. Page

- Page Name, Text - single line
- Page Description, Text - multi line
- Header Image, Asset
- Page Name Slug, Text - single line
- Page Content, Text - Markdown
- Navigation Link, reference

2. Navigation Link

- Navigation Name, Text - single line
- Page, reference
- Top Level Nav Item, boolean

## Gatsby Default starter

1. Get data from GraphCMS

- Configure `gatsby-source-graphql`

```js
{
  resolve: 'gatsby-source-graphql',
  options: {
    typeName: 'GRAPHCMSDATA',
    fieldName: 'graphCmsData',
    // Url to query from
    url: process.env.GATSBY_SOURCE_GRAPHQL,
  },
},
```

- add `.env` variables

2. Use `Dump.js` display data

3. Use `StaticQuery` to get nav data

- refactor `StaticQuery` renderprop

## Use `gatsby-node.js` to generate pages

1. Config `gatsby-node.js`.

```js
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/templates/pageTemplate.js')
  return graphql(`
    {
      graphCmsData {
        navigationLinks {
          id
          page {
            id
            pageNameSlug
            status
            pageContent
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pages = result.data.graphCmsData.navigationLinks

    // Create pages for each markdown file.
    pages.forEach(page => {
      createPage({
        path: page.page.pageNameSlug,
        component: pageTemplate,
        context: {
          path: page.page.pageNameSlug,
        },
      })
    })

    return pages
  })
}
```

2. Create `pageTemplate.js`

```js
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
  query($path: String!) {
    graphCmsData {
      pages(where: { pageNameSlug: $path }) {
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
```

