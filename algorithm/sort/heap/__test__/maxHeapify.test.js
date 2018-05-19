import maxHeapify from '../maxHeapify'

test('to make a array heap', () => {
  const arr = [4, 14, 7, 2, 8, 1]
  maxHeapify(arr, 0)
  expect(arr).toEqual([14, 8, 7, 2, 4, 1])
  maxHeapify(arr, 7)
  expect(arr).toEqual([14, 8, 7, 2, 4, 1])
  const tarr = [4, 14, 7, 2, 8, 1, 3, 5, 6, 7]
  // test for heapsize
  maxHeapify(tarr, 0, arr.length)
  expect(tarr).toEqual([14, 8, 7, 2, 4, 1, 3, 5, 6, 7])

  const heap = [14, 8, 7, 2, 4, 1]
  maxHeapify(heap, 0)
  expect(heap).toEqual([14, 8, 7, 2, 4, 1])
})

test('for empty array', () => {
  const arr = []
  maxHeapify(arr, 0)
  expect(arr).toEqual([])
})

test('throw error if heapSize bigger than length', () => {
  const arr = [1, 2, 3]
  expect(() => maxHeapify(arr, 0, 4)).toThrowError(
    "the heap size can't bigger than arr's length",
  )
})
