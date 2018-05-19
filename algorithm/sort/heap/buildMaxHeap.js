import maxHeapify from './maxHeapify'

/**
 * make an array to be a max heap
 * @param {Number[]} arr an array
 */
function buildMaxHeap(arr) {
  const heapSize = arr.length
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i)
  }
}

export default buildMaxHeap
