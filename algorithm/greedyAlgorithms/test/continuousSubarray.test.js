import continuousSubarray from '../continuousSubarray'

test('continuous sub array', () => {
  const testArr = [
    13,
    -3,
    -25,
    20,
    -3,
    -6,
    -16,
    -23,
    18,
    20,
    -7,
    12,
    -5,
    -22,
    15,
    -4,
    7,
  ]

  expect(continuousSubarray(testArr)).toBe(43)
})
