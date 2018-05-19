/**
 * @param {Array} arr the heap array
 * @param {Number} i the index
 */
function minHeapify(arr, i) {
  let minimum = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < arr.length && arr[left] < arr[i]) {
    minimum = left
  }
  if (right < arr.length && arr[right] < arr[minimum]) {
    minimum = right
  }

  if (minimum !== i) {
    ;[arr[minimum], arr[i]] = [arr[i], arr[minimum]]
    minHeapify(arr, minimum)
  }
}

export default minHeapify
