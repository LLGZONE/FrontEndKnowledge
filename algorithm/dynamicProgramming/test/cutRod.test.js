import cutRod from '../cutRod'

test('a dynamic programming example from CLRS', () => {
  const testArr = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

  expect(cutRod(testArr, 7)).toBe(18)
})
