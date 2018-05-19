/**
 * test an array is sorted or not
 * @param {Number} arr the sorted array
 * @param {Boolean} dec the array is dec or inc
 * @returns {Boolean}
 */
function isSorted(arr, dec) {
  if (!dec) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false
      }
    }
  }
  return true
}

export default isSorted
