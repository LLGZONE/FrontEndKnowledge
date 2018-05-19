import minHeapify from '../minHeapify'

test('to make a array heap', () => {
  const arr = [5, 2, 7, 8, 4, 9, 10]
  minHeapify(arr, 0)
  expect(arr).toEqual([2, 4, 7, 8, 5, 9, 10])
})

test('for empty array', () => {
  const arr = []
  minHeapify(arr, 0)
  expect(arr).toEqual([])
})
