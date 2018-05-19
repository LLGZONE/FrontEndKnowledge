import randomNArr from '../../../random/randomNArr'
import heapSort from '../heapSort'
import isSorted from '../../../../utils/isSorted'

test('sort for any array', () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(i)
  }
  for (let i = 0; i < 1000; i++) {
    const testArr = randomNArr(arr, 10)
    heapSort(testArr)
    expect(testArr).toHaveLength(10)
    expect(isSorted(testArr)).toBeTruthy()
  }
})
