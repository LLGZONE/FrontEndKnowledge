function throttle(func, delay, leading = false) {
  let timeout = null
  let last = 0
  let context = null
  if (!last && !leading) last = Date.now()
  return function(...params) {
    let now = Date.now()
    let remaining = delay - (now - last)
    context = this
    if (remaining <= 0 || remaining > delay) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      last = now
      func.apply(context, params)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, params)
      }, remaining)
    }
  }
}

export default throttle
