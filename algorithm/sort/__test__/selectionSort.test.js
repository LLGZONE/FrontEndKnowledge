import selectionSort from '../selectionSort'

test('selection sort', () => {
  const testArr = [1, 3, 9, 3, 6, 5, 2, 1]

  expect(selectionSort([])).toEqual([])
  expect(selectionSort(testArr)).toEqual([1, 1, 2, 3, 3, 5, 6, 9])
})
