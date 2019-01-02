import random from './random'

/**
 * @param {number[]} arr
 * @param {number} m the size of random arr
 * @returns {number[]} the random array
 */
function randomNArr(arr, m) {
  const len = arr.length

  if (m === 0) return []
  else {
    const s = randomNArr(arr.slice(0, len - 1), m - 1)
    const i = random(len - 1, 0)
    if (s.indexOf(i) >= 0) {
      s.push(arr[len - 1])
    } else {
      s.push(arr[i])
    }
    return s
  }
}

export default randomNArr
