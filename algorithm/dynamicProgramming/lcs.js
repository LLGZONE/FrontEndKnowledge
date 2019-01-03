/**
 * 最长公共子序列的长度c的表达式如下
 * c[i, j] = {
 *  0, // i === 0 || j === 0
 *  c[i-1, j-1] + 1, // str1[i] === str2[j]
 *  max(c[i-1, j], c[i, j-1]) // str1[i] !== str2[j]
 * }
 * @param {string} str1
 * @param {string} str2
 * @description 这个只能求出其中一种子序列
 */
function lcs(str1, str2) {
  const str1Len = str1.length
  const str2Len = str2.length
  if (str1Len === 0 || str2Len === 0) {
    return ''
  }
  // 长度分别为i, j的str1, str2的最长公共子序列数组
  const lcsArr = []

  for (let i = 0; i <= str1Len; i++) {
    lcsArr[i] = []
    lcsArr[i][0] = ''
  }
  for (let j = 0; j <= str2Len; j++) {
    lcsArr[0][j] = ''
  }
  for (let i = 1; i <= str1Len; i++) {
    for (let j = 1; j <= str2Len; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcsArr[i][j] = lcsArr[i - 1][j - 1] + str1[i - 1]
      } else if (lcsArr[i][j - 1].length >= lcsArr[i - 1][j].length) {
        lcsArr[i][j] = lcsArr[i][j - 1]
      } else {
        lcsArr[i][j] = lcsArr[i - 1][j]
      }
    }
  }
  return lcsArr[str1Len][str2Len]
}

export default lcs
