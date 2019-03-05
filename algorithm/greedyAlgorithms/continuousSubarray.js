function continuousSubarray(array) {
  let sum = Number.MIN_SAFE_INTEGER
  let curSum = 0
  for (let i = 0; i < array.length; i++) {
    if (curSum < 0) {
      curSum = array[i]
    } else {
      curSum += array[i]
    }

    if (curSum > sum) {
      sum = curSum
    }
  }

  return sum
}

export default continuousSubarray
