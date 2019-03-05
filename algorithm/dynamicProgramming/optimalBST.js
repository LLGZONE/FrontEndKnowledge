function optimalBST(p, q, n) {
  const e = []
  const w = []
  const root = []
  for (let i = 0; i <= n + 1; i++) {
    e[i] = []
    w[i] = []
    e[i][i - 1] = q[i - 1]
    w[i][i - 1] = q[i - 1]
  }
  for (let i = 0; i <= n; i++) {
    root[i] = []
  }

  for (let l = 1; l <= n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      j = i + l - 1
      e[i][j] = 
    }
  }
}
