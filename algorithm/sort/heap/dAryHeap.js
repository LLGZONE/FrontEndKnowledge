class dAryHeap {
  constructor(arr, d) {
    this.d = d
    this.heap = this.buildMaxHeap(arr, d)
  }
  /**
   * get node i's parent index
   * @param {Number} i index of element
   * @param {Nuber} d d ary
   */
  static parent(i, d) {
    return Math.floor((i - 1) / d)
  }

  /**
   * get node i's child index
   * @param {Number} i index
   * @param {Number} c nth child(begin from zero)
   * @param {Number} d d ary
   */
  static child(i, c, d) {
    return d * i + c + 1
  }

  static maxHeapify(heap, i, d) {
    const baseChild = this.child(i, 0, d)
    const heapSize = heap.length
    let largest = i

    for (let i = 0; i < d; i++) {
      const child = baseChild + i

      if (child < heapSize && heap[child] > heap[largest]) {
        largest = child
      }
    }

    if (largest !== i) {
      ;[heap[i], heap[largest]] = [heap[largest], heap[i]]
      this.maxHeapify(heap, largest, d)
    }
  }

  static buildMaxHeap(heap = [], d) {
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
      this.maxHeapify(heap, i, d)
    }

    return heap
  }

  increaseKey(i, key) {
    const heap = this.heap
    const d = this.d

    while (i > 0) {
      const p = this.parent(i, d)
      if (heap[p] >= key) {
        break
      }
      heap[i] = heap[p]
      i = p
    }

    heap[i] = key
  }

  insert(key) {
    this.heap.push(key)
    this.heap.increaseKey(this.heap.length - 1, key)
  }
}

export default dAryHeap
