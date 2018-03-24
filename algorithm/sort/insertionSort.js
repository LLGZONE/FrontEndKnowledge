function insertionSort(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    const tmp = arr[i]
    let j
    for (j = i; j > 0 && arr[j-1] > tmp; j--) {
      arr[j] = arr[j-1]
    }
    arr[j] = tmp
  }

  return arr
}

export default insertionSort