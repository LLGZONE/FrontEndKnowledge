/**
 *
 * @param {number[]} tuple
 * @param {number} idx1
 * @param {number} idx2
 */
function swap(tuple, idx1, idx2) {
  const temp = tuple[idx1]
  tuple[idx1] = tuple[idx2]
  tuple[idx2] = temp
}

/**
 *
 * @param {{value: number, weight: float}[]} arr
 * @param {number} begin
 * @param {number} end
 */
function partition(arr, begin, end) {
  const rindex = Math.floor(Math.random() * (end - begin) + begin)
  swap(arr, rindex, end)
  let i = begin

  for (let j = begin; j < end; j++) {
    if (arr[j].value <= arr[end].value) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, end)
  return i
}

function weightedMedian(arr, begin = 0, end = arr.length - 1, pivot = 0.5) {
  if (begin === end) return arr[begin]
  const q = partition(arr, begin, end)
  let lsum = 0
  for (let i = begin; i <= q; i++) {
    lsum += arr[i].weight
  }
  if (lsum - arr[q] < pivot && lsum >= pivot) {
    return arr[q]
  } else if (lsum >= pivot) {
    return weightedMedian(arr, begin, q - 1, pivot)
  } else {
    return weightedMedian(arr, q + 1, end, pivot - lsum)
  }
}

export default weightedMedian
