import PriorityQueue from './priorityQueue'

class Stack {
  constructor(arr = []) {
    const temp = []
    this.id = 0
    this.map = arr.reduce((m, ele) => {
      temp.push(this.id)
      m.set(this.id++, ele)
      return m
    }, new Map())
    this.s = new PriorityQueue(temp)
  }

  /**
   * push to the queue
   * @param {Number} num
   */
  push(num) {
    this.id++
    this.map.set(this.id, num)
    this.s.insert(this.id)
  }

  /**
   * get the first element
   * @returns {Number}
   */
  top() {
    return this.map.get(this.s.maxmum())
  }

  /**
   * pop and return the first element
   * @returns {Number}
   */
  pop() {
    const topId = this.s.extractMax()
    const top = this.map.get(topId)
    this.map.delete(topId)

    return top
  }

  /**
   * get the size of the queue
   * @returns {Number}
   */
  size() {
    return this.map.size
  }
}

export default Stack
