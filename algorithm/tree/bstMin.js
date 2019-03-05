function bstMin(T) {
  let res = T.root
  while (res.left !== null) {
    res = res.left
  }
  return res
}

export default bstMin
