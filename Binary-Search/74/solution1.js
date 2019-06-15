/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * 74. Search a 2D Matrix
 * 
 * Medium
 * 
 * 52ms 94.89%
 * 34.5mb 52.73%
 */
const searchMatrix = (matrix, target) => {
  const rows = matrix.length

  for (let row = 0; row < rows; row++) {
    const array = matrix[row]
    const cols = array.length
    if (array[cols - 1] < target) {
      continue
    }
    const index = binarySearch(array, 0, cols - 1, target)
    if (array[index] === target) {
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