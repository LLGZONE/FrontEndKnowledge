/**
 * test if it is a heap
 * @param {Number[]} heap
 */
function isMaxHeap(heap) {
  for (let i = 0; i < Math.floor(heap.length / 2 - 1); i++) {
    if (heap[i] < heap[2 * i + 1] || heap[i] < heap[2 * i + 2]) {
      return false
    }
  }

  return true
}

export default isMaxHeap
