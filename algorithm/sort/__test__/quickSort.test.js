import {quickSort1, quickSort2} from '../quickSort'

test('quick sort', () => {
  const testArr = [1, 3, 9, 3, 6, 5, 2, 1]

  expect(quickSort1([])).toEqual([])
  expect(quickSort1(testArr)).toEqual([1, 1, 2, 3, 3, 5, 6, 9])

  expect(quickSort2([])).toEqual([])
  expect(quickSort2([1, 3, 9, 3, 6, 5, 2, 1])).toEqual([1, 1, 2, 3, 3, 5, 6, 9])
})
