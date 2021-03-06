import PriorityQueue from './priorityQueue'

/**
 * @class queue achieved by priority queue
 */
class Queue {
  /**
   * @param {Number[]} arr the init array
   * @constructor
   */
  constructor(arr = []) {
    const temp = []
    this.id = 0
    this.map = arr.reduce((m, ele) => {
      temp.push(this.id)
      m.set(this.id--, ele)
      return m
    }, new Map())
    this.queue = new PriorityQueue(temp)
  }

  /**
   * push to the queue
   * @param {Number} num
   */
  push(num) {
    this.id--
    this.map.set(this.id, num)
    this.queue.insert(this.id)
  }

  /**
   * get the first element
   * @returns {Number}
   */
  top() {
    return this.map.get(this.queue.maxmum())
  }

  /**
   * pop and return the first element
   * @returns {Number}
   */
  pop() {
    const topId = this.queue.extractMax()
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

export default Queue
