function merge(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length
  let res = []
  let i = 0
  let j = 0

  const max = Math.max(Math.max(...arr1), Math.max(...arr2))
  arr1.push(max)
  arr2.push(max)

  for (let len = len1 + len2, l = 0; l < len; l++) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  return res
}

function merge2(arr1, arr2) {
  const len1 = arr1.length
  const len2 = arr2.length
  const res = []
  let i = 0
  let j = 0

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  if (i < len1) {
    res.push(...arr1.slice(i))
  }

  if (j < len2) {
    res.push(...arr2.slice(j))
  }

  return res
}

function mergeSort(arr, p = 0, r = arr.length - 1) {
  if (p < r) {
    const q = Math.floor((p + r) / 2)

    const arr1 = mergeSort(arr, p, q)
    const arr2 = mergeSort(arr, q + 1, r)

    return merge(arr1, arr2)
  } else {
    return arr.slice(p, r + 1)
  }
}

console.log(merge([1, 2, 3], [4, 5, 6]))
console.log(merge2([1, 2, 7], [4, 6]))
console.log(mergeSort([1, 3, 6, 8, 4, 4]))
