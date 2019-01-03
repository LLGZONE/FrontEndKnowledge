/**
 * @param {number[]} p 矩阵Ai规模为pi-1 * pi
 */
function matrixChainOrder(p) {
  const n = p.length - 1
  // m[i][j] 保存矩阵Ai乘到Aj的最少次数
  const m = []
  // s 记录m[i][j] 的分割点
  const s = []
  for (let i = 1; i <= n; i++) {
    m[i] = []
    m[i][i] = 0
  }
  for (let i = 1; i <= n - 1; i++) {
    s[i] = []
  }
  // 采用自底向上的方法
  // l 为矩阵链的长度
  for (let l = 2; l <= n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      let j = i + l - 1
      // k即代表了分割线
      for (let k = i; k < j; k++) {
        let q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j]
        if (m[i][j] === undefined || q < m[i][j]) {
          m[i][j] = q
          s[i][j] = k
        }
      }
    }
  }

  return [m, s]
}

export default matrixChainOrder
