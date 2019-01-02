import weightedMedian from '../weightedMedian'
import randomArr from '../../random/randomArr'

test('weighted median', () => {
  let arr = [
    {value: 5, weight: 0.1},
    {value: 2, weight: 0.3},
    {value: 7, weight: 0.15},
    {value: 1, weight: 0.05},
    {value: 9, weight: 0.3},
    {value: 10, weight: 0.1},
  ]
  let rarr = randomArr(arr)

  expect(weightedMedian(rarr)).toEqual({value: 7, weight: 0.15})
})
