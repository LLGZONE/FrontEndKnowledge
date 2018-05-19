function maxHeapify(arr, i) {
  const heapSize = arr.length

  while (i < Math.floor(heapSize / 2)) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < heapSize && arr[left] > arr[i]) {
      largest = left
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
      i = largest
    } else {
      return
    }
  }
}

export default maxHeapify
