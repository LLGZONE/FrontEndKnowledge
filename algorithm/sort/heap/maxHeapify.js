/**
 * both the left child and right child are heap now,
 * to keep the heap, we just compare and then exchange
 * their value and recurse.
 * @param {Number[]} arr the heap array
 * @param {Number} i the index
 * @param {Number} [heapSize]
 */
function maxHeapify(arr, i, heapSize = arr.length) {
  if (heapSize > arr.length) {
    throw new Error("the heap size can't bigger than arr's length ")
  }

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
    maxHeapify(arr, largest, heapSize)
  }
}

export default maxHeapify
