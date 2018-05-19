import maxHeapify from '../maxHeapifyNoRecursive'

test(
  'to make a array heap',
  () => {
    const arr = [4, 14, 7, 2, 8, 1]
    maxHeapify(arr, 0)
    expect(arr).toEqual([14, 8, 7, 2, 4, 1])
    maxHeapify(arr, 7)
    expect(arr).toEqual([14, 8, 7, 2, 4, 1])

    const heap = [14, 8, 7, 2, 4, 1]
    maxHeapify(heap, 0)
    expect(heap).toEqual([14, 8, 7, 2, 4, 1])
  },
  5000,
)

test('for empty array', () => {
  const arr = []
  maxHeapify(arr, 0)
  expect(arr).toEqual([])
})
