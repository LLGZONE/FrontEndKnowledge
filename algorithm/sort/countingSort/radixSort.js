function baseLog(x, y) {
  return Math.log(y) / Math.log(x)
}

function radixSort(arr, radix = 10) {
  const max = Math.max(...arr)
  const d = Math.ceil(baseLog(radix, max + 1))
  const len = arr.length
  const count = Array(radix)
  const tmp = Array(d)

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < radix; j++) {
      count[j] = 0
    }

    for (let j = 0; j < len; j++) {
      const k = Math.floor(arr[j] / radix ** i) % radix
      count[k]++
    }

    for (let j = 1; j <= radix; j++) {
      count[j] = count[j - 1] + count[j]
    }

    for (let j = len - 1; j >= 0; j--) {
      const k = Math.floor(arr[j] / radix ** i) % radix
      tmp[--count[k]] = arr[j]
    }

    for (let j = 0; j < len; j++) {
      arr[j] = tmp[j]
    }
  }
}

export default radixSort
