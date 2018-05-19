import buildMaxHeap from './buildMaxHeap'
import maxHeapify from './maxHeapify'

/**
 * sort the array from min to max
 * @param {number[]} arr the array to be sorted
 */
function heapSort(arr) {
  // make the arr to be a heap
  buildMaxHeap(arr)
  // the max number is in the first index
  let heapSize = arr.length
  for (let i = heapSize - 1; i > 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    heapSize--
    maxHeapify(arr, 0, heapSize)
  }
}

export default heapSort
