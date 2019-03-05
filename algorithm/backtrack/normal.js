import {isWorker} from 'cluster'

function backtrace(k) {
  if (k > n) {
    printResult()
  } else {
    for (let i = begin; i != end; i++) {
      arr[k] = i
      if (isOk(k)) {
        backtrace(k + 1)
      }
      reset(arr[k])
    }
  }
}
