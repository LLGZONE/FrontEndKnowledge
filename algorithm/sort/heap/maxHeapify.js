/**
 * both the left child and right child are heap now,
 * to keep the heap, we just compare and then exchange
 * their value and recurse.
 * @param {Array} arr the heap array
 * @param {Number} i the index
 */
function maxHeapify(arr, i) {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2
  const heapSize = arr.length

  if (left < heapSize && arr[left] > arr[i]) {
    largest = left
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== i) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    maxHeapify(arr, largest)
  }
}

export default maxHeapify
