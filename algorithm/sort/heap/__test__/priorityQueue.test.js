import Queue from '../priorityQueue/priorityQueue'
import randomNArr from '../../../random/randomNArr'
import is from '../../../../utils/is'

describe('priority queue', () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(i)
  }

  for (let i = 0; i < 100; i++) {
    const rarr = randomNArr(arr, 10)
    const q = new Queue(rarr)

    test('the length should to be 10', () => {
      expect(q.heapSize).toBe(10)
    })

    test('it should be a heap', () => {
      expect(is.maxHeap(q.heap)).toBeTruthy()
    })

    test('method maxmun', () => {
      expect(() => {
        return q.maxmum() === Math.max(q.heap)
      }).toBeTruthy()
    })

    test('method extractMax', () => {
      const isMax = q.maxmum() === q.extractMax()
      expect(isMax).toBeTruthy()
      expect(q.heap).toHaveLength(9)
      expect(q.heapSize).toBe(9)
      expect(is.maxHeap(q.heap)).toBeTruthy()
    })

    test('method parent', () => {
      expect(q.parent(2)).toBe(0)
      expect(q.parent(5)).toBe(2)
    })

    test('method increase key', () => {
      q.increaseKey(8, 101)
      expect(is.maxHeap(q.heap)).toBeTruthy()
    })

    test('method insert', () => {
      q.insert(10)
      expect(is.maxHeap(q.heap)).toBeTruthy()
      expect(q.heapSize).toBe(10)
    })
  }
})
