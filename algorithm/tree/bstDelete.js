import bstMin from './bstMin'

function transplant(T, u, v) {
  if (u.p === null) {
    T.root = v
  } else if (u.key < u.p.key) {
    u.p.left = v
  } else {
    u.p.right = v
  }
  if (v !== null) {
    u.p = v.p
  }
}

function bstDel(T, item) {
  if (item.left === null) {
    transplant(T, item, item.right)
  } else if (item.right === null) {
    transplant(T, item, item.right)
  } else {
    let min = bstMin(item.right)
    if (min.p !== item) {
      transplant(T, min, min.right)
      min.right = item.right
      min.right.p = min
    }
    transplant(T, item, min)
    min.left = item.left
    min.left.p = min
  }
}

export default bstDel
