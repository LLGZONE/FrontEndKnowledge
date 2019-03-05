function sumOfSub(arr, target) {
  const n = arr.length
  let res = []
  function backTrack(k = 0, sum = 0, result = []) {
    if (k >= n) {
      return res
    }
    if (sum === target) {
      res.push(result)
    } else {
      for (let i = k; i < n; i++) {
        sum += arr[i]
        if (sum <= target) {
          result.push(arr[i])
          backTrack(k + 1, sum, result.slice())
        }
      }
    }
  }
  return backTrack()
}
