const nameContent = 'NCSC Site'
const descriptionContent =
  'National Cyber Security Centre a part of GCHQ'
const keywordsContent = 'ncsc, ncsc wiki, cyber security'
const imageLink = ''
const siteLink = 'https://ncsc.gov'

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
