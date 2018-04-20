const nameContent = 'Site Name'
const descriptionContent = 'site description'
const keywordsContent = 'key words, comma, separated'
const imageLink = ''
const siteLink = 'https://sitename.com'

const siteMeta = [
  // Google / Search Engine Tags
  {
    name: 'description',
    content: descriptionContent
  },
  {
    name: 'keywords',
    content: keywordsContent
  },
  {
    name: 'image',
    content: imageLink
  },
  // facebook
  { name: 'og:url', content: siteLink },
  { name: 'og:type', content: 'website' },
  { name: 'og:title', content: nameContent },
  {
    name: 'og:description',
    content: descriptionContent
  },
  {
    name: 'og:image',
    content: imageLink
  },
  // twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: nameContent
  },
  {
    name: 'twitter:description',
    content: descriptionContent
  },
  {
    name: 'twitter:image',
    content: imageLink
  }
]

export default siteMeta
