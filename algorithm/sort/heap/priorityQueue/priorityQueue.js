import buildMaxHeap from '../buildMaxHeap'
import maxHeapify from '../maxHeapify'

/**
 * @class create a priority queue
 */
class PriorityQueue {
  /**
   * @param {Number} arr
   */
  constructor(arr) {
    this.heapSize = arr.length
    this.heap = buildMaxHeap(arr.slice())
  }

  /**
   * return the top element of the heap
   * @returns {Number}
   */
  maxmum() {
    return this.heap[0]
  }

  /**
   * return and pop the max element
   * @returns {Number | null}
   */
  extractMax() {
    if (this.heapSize < 1) {
      return null
    }

    const max = this.heap[0]
    this.heap[0] = this.heap[this.heapSize - 1]
    this.heapSize--
    this.heap.pop()
    maxHeapify(this.heap, 0)

    return max
  }

  /**
   * get the parent index
   * return null if no parent
   * @param {Number} i
   */
  parent(i) {
    if (i === 0) {
      return null
    }
    return Math.floor((i - 1) / 2)
  }

  /**
   * increase the element's priority
   * @param {Number} i index
   * @param {Number} key the priority of the element
   */
  increaseKey(i, key) {
    const heap = this.heap
    if (key < heap[i]) {
      throw new Error('key is smaller than current key')
    }

    heap[i] = key

    while (i > 0 && heap[this.parent(i)] < key) {
      heap[i] = heap[this.parent(i)]
      i = this.parent(i)
    }
    heap[i] = key
  }

  /**
   * insert into the queue
   * @param {Number} key the element to be inserted
   */
  insert(key) {
    this.heapSize++
    this.heap.push(key)
    this.increaseKey(this.heapSize - 1, key)
  }
}

export default PriorityQueue
