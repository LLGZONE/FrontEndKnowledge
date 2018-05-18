/**
 * return a random number between max and min
 * @param {number} min the min number
 * @param {number} max the max number
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default random
