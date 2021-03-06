import qSort from '../quickSort/hybridSort'

import randomNArr from '../../random/randomNArr'
import isSorted from '../../../utils/isSorted'

test('sort for any array', () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(i)
  }
  for (let i = 0; i < 1000; i++) {
    const testArr = randomNArr(arr, 40)
    qSort(testArr)
    expect(testArr).toHaveLength(40)
    expect(isSorted(testArr)).toBeTruthy()
  }
})
