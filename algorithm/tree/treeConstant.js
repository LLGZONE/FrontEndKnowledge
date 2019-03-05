class TreeItem {
  constructor(key) {
    this.left = null
    this.right = null
    this.key = key
    this.p = null
  }
}

const Tree = {
  root: null,
  left: null,
  right: null,
}

export {Tree, TreeItem}
