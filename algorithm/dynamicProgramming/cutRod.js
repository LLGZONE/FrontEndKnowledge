function cutRod(arr, n) {
  let mem = [0]

  function cutRodAux() {
    for (let j = 1; j <= n; j++) {
      let q = -1
      for (let i = 1; i <= j; i++) {
        q = Math.max(q, arr[i - 1] + mem[j - i])
      }
      mem[j] = q
    }
    return mem[n]
  }

  return cutRodAux()
}

export default cutRod
