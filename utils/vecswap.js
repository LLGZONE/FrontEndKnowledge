// 交换一个区域的数据
function vecswap(arr, a, b, n) {
  if (a + n > arr.length || b + n > arr.length) {
    throw new Error('overflow')
  }

  for (let i = 0; i < n; i++, a++, b++) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
}

export default vecswap
