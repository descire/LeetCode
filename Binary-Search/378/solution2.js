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
  let start = matrix[0][0]
  let end = matrix[len - 1][len - 1]

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    // 计算中间值
    let middle = searchSmallerCount(matrix, mid)
    if (k > middle) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
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