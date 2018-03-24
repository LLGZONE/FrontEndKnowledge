import insertionSort from '../insertionSort'

test('insertion sort', () => {
  const testArr = [3, 4, 1, 2, 9, 6, 4, 5]

  expect(insertionSort(testArr)).toEqual([1, 2, 3, 4, 4, 5, 6, 9])
})