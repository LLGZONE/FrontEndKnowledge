import random from '../random'

test('random number', () => {
  for (let i = 0; i < 10000; i++) {
    expect(random(1, 10)).toBeLessThanOrEqual(10)
    expect(random(1, 10)).toBeGreaterThanOrEqual(1)
  }
})
