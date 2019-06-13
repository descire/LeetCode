/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * 
 * 240. Search a 2D Matrix II
 * 
 * Medium
 * 
 * 244ms 30.04ms
 * 38mb 25.77%
 * 
 * O(nlogn)
 */
const searchMatrix = (matrix, target) => {
  const rows = matrix.length

  for (let row = 0; row < rows; row++) {
    const m = matrix[row]
    if (m[0] > target) {
      return false
    }
    const index = binarySearch(m, 0, m.length - 1, target)
    if (m[index] === target) {
      return true
    }
  }
  return false
}

function binarySearch(array, first, last, target) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (array[mid] >= target) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  return first
}