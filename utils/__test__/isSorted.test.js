import isSorted from '../isSorted'

test('empty array is sorted', () => {
  expect(isSorted([])).toBeTruthy()
  expect(isSorted([], false)).toBeTruthy()
  expect(isSorted([], true)).toBeTruthy()
})

test('sorted array return true', () => {
  expect(isSorted([1, 2, 3, 4, 5])).toBeTruthy()
  expect(isSorted([1])).toBeTruthy()
  expect(isSorted([1], false)).toBeTruthy()
  expect(isSorted([1, 2, 3, 4, 5], true)).toBeFalsy()
  expect(isSorted([5, 4, 3, 2, 1], true)).toBeTruthy()
})
