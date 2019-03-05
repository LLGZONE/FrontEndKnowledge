import insert from './bstInsert'
import {TreeItem} from './treeConstant'

function buildBST(arr) {
  let T = {
    root: null,
    left: null,
    right: null,
  }
  arr.map(t => {
    const item = new TreeItem(t.key)
    insert(T, item)
  })
  return T
}

export default buildBST
