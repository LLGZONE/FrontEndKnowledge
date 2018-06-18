function countingSort(arr) {
  const max = Math.max(arr)
  const cArr = Array(max).fill(0)
  const res = Array(arr.length)

  arr.map(val => {
    cArr[val] += 1
  })

  cArr.reduce((pre, cur, idx, arr) => {
    arr[cur] += arr[pre]
  })

  // ensure the method to be stable
  for (let i = arr.length - 1; i >= 0; i--) {
    const ele = arr[i]
    res[--cArr[ele]] = ele
  }

  return res
}

export default countingSort
