import bubbleSort from '../bubbleSort'
import randomArr from '../../random/randomArr'

test('sort from small to big', () => {
  let testArr = [1, 3, 5, 2, 9, 7]

  for (let i = 0; i < 1000; i++) {
    testArr = randomArr(testArr)
    expect(bubbleSort(testArr)).toEqual([1, 2, 3, 5, 7, 9])
  }
})
