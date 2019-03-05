import inversionCount from './inversionCount'

test('the count of the inversion', () => {
  let array = [2, 3, 8, 6, 1]
  expect(inversionCount(array)).toBe(5)
  expect(inversionCount([5, 3, 9, 4, 1])).toBe(7)
  expect(array).toEqual([1, 2, 3, 6, 8])
})
