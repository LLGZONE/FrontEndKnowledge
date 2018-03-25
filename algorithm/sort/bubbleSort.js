/**
 * bubble sort
 * ave: O(n2) best: O(n) worst: O(n2)
 * space: O(1)
 * stable
 */
function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j ++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }

  return arr
}

export default bubbleSort