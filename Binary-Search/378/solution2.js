/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * 
 * 378. Kth Smallest Element in a Sorted Matrix
 * 
 * Medium
 * 
 * 64ms 97.86%
 * 38.1mb 73.13%
 * 
 */
const kthSmallest = (matrix, k) => {
  const len = matrix.length
  let first = matrix[0][0]
  let last = matrix[len - 1][len - 1]

  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    let count = searchSmallerCount(matrix, mid)
    if (count < k) {
      first = mid + 1
    } else {
      last = mid
    }
  }
  return first
}

function searchSmallerCount(matrix, target) {
  const n = matrix.length
  let row = n - 1
  let col = 0
  let count = 0
  while (row >= 0 && col < n) {

    if (matrix[row][col] <= target) {
      count += row + 1
      col++
    } else {
      row--
    }
  }
  return count
}