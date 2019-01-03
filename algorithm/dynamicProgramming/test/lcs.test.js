import lcs from '../lcs'

test('lcs test', () => {
  expect(lcs('BADBCBA', 'ABACDB')).toBe('ABCB')
})
