import matrixChainOrder from '../matrixChainOrder'

function printOptimalParens(s, i, j) {
  if (i === j) {
    return `A${i}`
  } else {
    return (
      `(` +
      printOptimalParens(s, i, s[i][j]) +
      printOptimalParens(s, s[i][j] + 1, j) +
      ')'
    )
  }
}

test('the chain order', () => {
  const testArr = [30, 35, 15, 5, 10, 20, 25]
  const [m, s] = matrixChainOrder(testArr)
  expect(m[1][6]).toBe(15125)
  expect(s[1][6]).toBe(3)
  expect(printOptimalParens(s, 1, 6)).toBe('((A1(A2A3))((A4A5)A6))')
})
