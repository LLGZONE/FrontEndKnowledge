import insertionSort from '../sort/insertionSort'

function partition(arr, pivot, begin = 0, end = arr.length - 1) {
  const len = end - begin + 1
  let j = begin

  for (let i = len - 1; i >= begin; i--) {
    if (arr[i] < pivot) {
      ;[arr[i], arr[j]] = [arr[i], arr[j]]
      j++
    }
  }

  return j - 1
}

function getMidArr(arr, begin = 0, end = arr.length - 1) {
  const len = end - begin + 1
  const vnum = 5
  const midArr = []

  if (len < 5) {
    insertionSort(arr, begin, end)
    midArr.push(arr[begin + Math.floor((len - 1) / 2)])
    return midArr
  }

  let i
  for (i = 0; i < Math.floor(len / vnum); i++) {
    const baseIdx = i * vnum + begin
    insertionSort(arr, baseIdx, baseIdx + vnum - 1)
    midArr.push(arr[Math.floor(vnum / 2) + baseIdx])
  }
  let rest = len - 1 - i * vnum
  if (rest >= 0) {
    insertionSort(arr, i * vnum)
    midArr.push(arr[i * vnum + Math.floor(rest / 2)])
  }
  return midArr
}

function select(arr, i, begin = 0, end = arr.length - 1) {
  // 每一组个数
  const x = getMidArr(getMidArr(arr, begin, end))[0]
  const k = partition(arr, x, begin, end)
  if (i === begin + k - 1) return x
  if (i < begin + k - 1) select(arr, i, 0, k - 1)
  else {
    select(arr, i - k - 1, k + 1, end)
  }
}

export default select
