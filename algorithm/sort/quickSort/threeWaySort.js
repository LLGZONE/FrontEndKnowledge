import vecswap from '../../../utils/vecswap'

function medianOfThree(a, b, c) {
  if (a < b) {
    if (b < c) return b
    else if (a < c) return c
    else return a
  } else if (a < c) return a
  else if (b < c) return c
  else return b
}

// 相当于数组的分区，将数组分为不同的区，以不同的index为界
// 左边相等区||小于区||大于区||右边相等区
function threeWayPartition(arr, low, high) {
  const mid = medianOfThree(low, high, Math.floor((low + high) / 2))
  const pivot = arr[mid]

  // 每个区域的尾后位置
  let lE = low
  let l = lE
  let r = high
  let rE = r

  while (true) {
    while (l <= r && arr[l] <= pivot) {
      if (arr[l] === pivot) {
        ;[arr[lE], arr[l]] = [arr[l], arr[lE]]
        lE++
      }
      l++
    }
    while (r >= l && arr[r] >= pivot) {
      if (arr[r] === pivot) {
        ;[arr[rE], arr[r]] = [arr[r], arr[rE]]
        rE--
      }
      r--
    }

    if (l > r) break
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }

  let p = Math.min(lE - low, l - lE)
  vecswap(arr, low, l - p, p)
  p = Math.min(high - rE, rE - r)
  vecswap(arr, rE + 1, r + 1, p)

  return [l - lE, rE - r]
}

export default threeWayPartition
