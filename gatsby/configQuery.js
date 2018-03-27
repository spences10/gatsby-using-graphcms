module.exports = `
  query NavLinks ($topLevel: Boolean!) {
    allNavigationLinks (filter: {topLevelNavItem:$topLevel}){
      name
      subNavLinks {
        name
      }
    }
  }
`
