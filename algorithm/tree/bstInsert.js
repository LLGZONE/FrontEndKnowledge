function treeInsert(T, item) {
  let p = T.root
  if (p == null) {
    T.root = item
  }
  let itemP = null
  while (p !== null) {
    itemP = p
    if (p.key < item.key) {
      p = p.left
    } else {
      p = p.right
    }
  }
  item.p = itemP
  if (item.key < itemP.key) {
    itemP.left = item
  } else {
    itemP.right = item
  }
}

export default treeInsert
