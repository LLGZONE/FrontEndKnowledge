function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function deepCopy(obj, visit = new Map()) {
  let res = obj
  if (visit.has(obj)) {
    return visit.get(obj)
  }
  if (Array.isArray(obj)) {
    res = []
    visit.set(obj, res)
    for (let key in obj) {
      res[key] = deepCopy(obj[key], visit)
    }
  } else if (getType(obj) === 'Object') {
    res = {}
    visit.set(obj, res)
    for (let key in obj) {
      res[key] = deepCopy(obj[key], visit)
    }
  } else if (getType(obj) === 'Function') {
    // eslint-disable-next-line
    res = eval(`(${obj.toString()})`)
  }
  return res
}

export default deepCopy
