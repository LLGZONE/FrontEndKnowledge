function debounce(func, delay) {
  let timeout = null

  return function(...params) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, params)
    }, delay)
  }
}

export default debounce
