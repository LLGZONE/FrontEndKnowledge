import buildMaxHeap from '../buildMaxHeap'

test('make an array be a heap', () => {
  const test = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
  buildMaxHeap(test)
  expect(test).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1])
})

test('empty array', () => {
  const arr = []
  buildMaxHeap(arr)
  expect(arr).toEqual([])
})
