/**
 * https://leetcode.com/problems/toeplitz-matrix/
 * 
 * 766. Toeplitz Matrix
 * 
 * Easy
 */
const isToeplitzMatrix = matrix => {
  const row = matrix.length
  if (!row) {
    return true
  }
  const col = matrix[0].length
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - 1; j++) {
      const item = matrix[i][j]
      const sameItem = matrix[i + 1][j + 1]
      if (item !== sameItem) {
        return false
      }
    }
  }
  return true
}