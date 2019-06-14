/**
 * https://leetcode.com/problems/find-k-closest-elements/
 * 
 * 658. Find K Closest Elements
 * 
 * Medium
 * 
 * 88ms 96.82%
 * 40.7mb 59.55%
 */
const findClosestElements = (arr, k, x) => {
  const ans = []
  const index = binarySearch(arr, 0, arr.length - 1, x, k)

  return arr.slice(index, index + k)
}

function binarySearch(array, first, last, target, k) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    // 左边必须优先选择 所以为 mid + k
    if (mid + k > array.length - 1 || target - array[mid] <= array[mid + k] - target) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  return first
}