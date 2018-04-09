module.exports = `
  query NavLinks ($topLevel: Boolean!) {
    allNavigationLink (filter: {topLevelNavItem:$topLevel}){
      name
      subNavLinks {
        name
      }
    }
  }
`
