import buildMaxHeap from './buildMaxHeap'
import maxHeapify from './maxHeapify'
import swap from '../../../utils/wrap'

/**
 * sort the array from min to max
 * @param {number[]} arr the array to be sorted
 */
function heapSort(arr) {
  // make the arr to be a heap
  buildMaxHeap(arr)
  // the max number is in the first index
  const heapSize = arr.length
  for (let i = heapSize; i > 1; i--) {
    swap([arr[0], arr[i]])
    maxHeapify(arr.slice(0, heapSize - 1), 0)
  }
}

export default heapSort
