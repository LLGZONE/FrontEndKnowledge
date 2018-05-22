import Stack from '../priorityQueue/stack'

describe('test for queue', () => {
  test('test queue', () => {
    const q = new Stack([1, 2, 3])

    console.log(q.map)
    expect(q.top()).toBe(3)
    expect(q.size()).toBe(3)
    q.pop()
    expect(q.pop()).toBe(2)
    expect(q.pop()).toBe(1)
    expect(q.size()).toBe(0)
    q.push(2)
    q.push(5)
    expect(q.top()).toBe(5)
    expect(q.size()).toBe(2)
  })
})
