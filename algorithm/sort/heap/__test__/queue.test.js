import Queue from '../priorityQueue/queue'

describe('test for queue', () => {
  test('test queue', () => {
    const q = new Queue([1, 2, 3])

    expect(q.top()).toBe(1)
    expect(q.size()).toBe(3)
    q.pop()
    expect(q.pop()).toBe(2)
    expect(q.pop()).toBe(3)
    expect(q.size()).toBe(0)
    q.push(2)
    q.push(5)
    expect(q.top()).toBe(2)
    expect(q.size()).toBe(2)
  })
})
