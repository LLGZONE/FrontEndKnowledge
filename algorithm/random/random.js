/**
 * return a random number between max and min
 * @param {number} min the min number
 * @param {number} max the max number
 * @returns {number} the random number
 */
function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default random
