/**
 * return a random array
 * @param {Array} arr
 */
function randomArr(arr) {
  arr = Array.from(arr)
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    const randomIdx = Math.floor(Math.random() * (len - i - 1) + i)
    ;[arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]]
  }

  return arr
}

export default randomArr
