/**
 * insertionSort between arr[begin] and arr[end]
 * ave: O(n2), best: O(n), worst: O(n2)
 * space: O(1)
 * stable
 */
function insertionSort(arr, begin = 0, end = arr.length - 1) {
  for (let i = begin; i <= end; i++) {
    const tmp = arr[i]
    let j
    for (j = i; j > 0 && arr[j - 1] > tmp; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = tmp
  }

  return arr
}

export default insertionSort
