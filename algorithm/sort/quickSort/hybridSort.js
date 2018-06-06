import insertionSort from '../insertionSort'
import threeWayPartition from './threeWaySort'

function hybridSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    if (high - low <= 16) {
      return insertionSort(arr)
    }

    const [p, q] = threeWayPartition(arr, low, high)

    if (p > 1) {
      hybridSort(arr, low, low + p - 1)
    }

    if (q > 1) {
      hybridSort(arr, high - q + 1, high)
    }
  }

  return arr
}

export default hybridSort
