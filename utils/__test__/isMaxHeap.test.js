import isMaxHeap from '../isMaxHeap'

test('empty arr return true', () => {
  expect(isMaxHeap([])).toBeTruthy()
})

test('general test', () => {
  expect(isMaxHeap([1])).toBeTruthy()
  expect(isMaxHeap([16, 15, 10, 14, 7, 9, 3, 2, 8, 1])).toBeTruthy()
  expect(isMaxHeap([16, 15, 10, 14, 7, 9, 11, 2, 8, 1])).toBeFalsy()
})
