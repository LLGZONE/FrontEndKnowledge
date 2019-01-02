import random from '../random'

test('random number', () => {
  for (let i = 0; i < 10000; i++) {
    expect(random(10, 1)).toBeLessThanOrEqual(10)
    expect(random(10, 1)).toBeGreaterThanOrEqual(1)
  }
})
