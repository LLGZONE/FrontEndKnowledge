import randomNArr from '../randomNArr'

test('return a random arr', () => {
  expect(randomNArr([1, 2, 3, 4, 5], 2)).toHaveLength(2)
  expect(randomNArr([1, 2, 3, 4], 0)).toEqual([])
  expect(randomNArr([1, 2, 3, 4], 4)).toContain(1, 2, 3, 4)
})
