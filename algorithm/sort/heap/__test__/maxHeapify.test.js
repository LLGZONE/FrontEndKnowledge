import maxHeapify from '../maxHeapify'

test('to make a array heap', () => {
  const arr = [4, 14, 7, 2, 8, 1]
  maxHeapify(arr, 0)
  expect(arr).toEqual([14, 8, 7, 2, 4, 1])
  maxHeapify(arr, 7)
  expect(arr).toEqual([14, 8, 7, 2, 4, 1])
  const tarr = [4, 14, 7, 2, 8, 1, 3, 5, 6, 7]
  maxHeapify(tarr, 0, arr.length)
  expect(tarr).toEqual([14, 8, 7, 2, 4, 1, 3, 5, 6, 7])
})

test('for empty array', () => {
  const arr = []
  maxHeapify(arr, 0)
  expect(arr).toEqual([])
})
