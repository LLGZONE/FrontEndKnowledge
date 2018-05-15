import insertionSort from '../insertionSort'
import randomArr from '../../random/randomArr'

test('insertion sort', () => {
  let testArr = [3, 4, 1, 2, 9, 6, 4, 5]

  expect(insertionSort([])).toEqual([])
  for (let i = 0; i < 1000; i++) {
    testArr = randomArr(testArr)
    expect(insertionSort(testArr)).toEqual([1, 2, 3, 4, 4, 5, 6, 9])
  }
})
