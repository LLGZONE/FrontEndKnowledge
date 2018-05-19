/**
 * wrap two element
 * @param {Number[]} arr array contains two elements
 */
function swap(arr) {
  if (arr.length !== 2) {
    throw new Error(
      'Error: the wrap function expect the length of arr to be two',
    )
  }
  const temp = arr[0]
  arr[0] = arr[1]
  arr[1] = temp
}

export default swap
