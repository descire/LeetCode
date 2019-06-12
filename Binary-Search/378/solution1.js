/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * 
 * 378. Kth Smallest Element in a Sorted Matrix
 * 
 * Medium
 * 
 * 96ms 63.21%
 * 40.6mb 28.43%
 */
const kthSmallest = (matrix, k) => {
  const rows = matrix.length
  const cols = matrix[0].length

  const a = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      a.push(matrix[row][col])
    }
  }
  
  a.sort((a, b) => a - b)

  return a[k - 1]
}