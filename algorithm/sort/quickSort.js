/**
 * quickSort1
 * ave: O(nlog(n)) best: O(n) worst: O(n2)
 * space: O(n)
 * not stable
 * not in-place
 */
export function quickSort1(arr) {
  if (arr.length <= 1) return arr

  let left = []
  let right = []
  let pivot = arr.shift()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort1(left).concat(pivot, quickSort1(right))
}

/**
 * quickSort1
 * ave: O(nlog(n)) best: O(n) worst: O(n2)
 * space: O(log(n))
 * not stable
 * in-place
 */
export function quickSort2(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high)

    quickSort2(arr, low, pi - 1)
    quickSort2(arr, pi + 1, high)
  }

  return arr
}

function partition(arr, low, high) {
  let i = low
  let count = 0
  const pivot = arr[high]

  for (let j = low; j <= high - 1; j++) {
    // improve performance when elements are the same
    if (arr[j] === pivot) {
      count++
    }
    if (arr[j] <= pivot) {
      if (arr[i] !== arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      i++
    }
  }

  ;[arr[i], arr[high]] = [arr[high], arr[i]]
  return i - Math.floor(count / 2)
}
