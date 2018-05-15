function binarySearch(arr, value) {
  let end = arr.length
  let start = 0
  let mid = start

  while (start < end) {
    mid = Math.floor((start + end) / 2)
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      end = mid
    } else {
      start = mid
    }
  }
  return null
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5))
