function selectionSort(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }

    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }

  return arr
}

export default selectionSort