import bubbleSort from '../bubbleSort'

test('sort from small to big', () => {
  let testArr = [1, 3, 5, 2, 9, 7]

  expect(bubbleSort(testArr)).toEqual([1, 2, 3, 5, 7, 9])

  testArr = [2, 4, 3, 6, 3, 9]

  expect(bubbleSort(testArr)).toEqual([2, 3, 3, 4, 6, 9])
  expect(bubbleSort([])).toEqual([])
})
