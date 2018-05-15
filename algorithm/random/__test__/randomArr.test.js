import randomArr from '../randomArr'

test('empty arr', () => {
  let testArr = []

  expect(randomArr(testArr)).toEqual([])
})

test('for any arr', () => {
  let testArr = [1, 2, 3, 4, 5, 6, 7]

  expect(randomArr(testArr)).toContain(...testArr)
  expect(randomArr(testArr)).toHaveLength(testArr.length)
})
