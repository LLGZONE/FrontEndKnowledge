/**
 *
 * @param {number[]} array
 */
function inversionCount(array, begin = 0, end = array.length - 1) {
  if (begin < end) {
    const mid = Math.floor((begin + end) / 2)

    return (
      inversionCount(array, begin, mid) +
      inversionCount(array, mid + 1, end) +
      merge(array, begin, mid, end)
    )
  } else {
    return 0
  }
}

function merge(array, begin, mid, end) {
  let inversions = 0
  let i = 0
  let j = 0

  const leftArr = array.slice(begin, mid + 1)
  const rightArr = array.slice(mid + 1, end + 1)
  leftArr.push(Number.MAX_SAFE_INTEGER)
  rightArr.push(Number.MAX_SAFE_INTEGER)

  for (let l = begin; l <= end; l++) {
    if (leftArr[i] <= rightArr[j]) {
      array[l] = leftArr[i]
      i++
    } else {
      array[l] = rightArr[j]
      j++
      inversions += leftArr.length - i - 1
    }
  }
  return inversions
}

export default inversionCount
