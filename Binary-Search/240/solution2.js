/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * 
 * 240. Search a 2D Matrix II
 * 
 * Medium
 * 
 * 76ms 94.61%
 * 
 * 37.6mb 37.71%
 * 
 */
const searchMatrix = (matrix, target) => {
  let rows = matrix.length
  if (rows === 0) {
    return false
  }
  let cols = matrix[0].length

  let i = 0
  let j = cols - 1

  while (i < rows && j >= 0) {
    const m = matrix[i][j]
    if (m === target) {
      return true
    }
    if (m > target) {
      j--
    } else {
      i++
    }
  }
  return false
}