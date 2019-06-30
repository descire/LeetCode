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

function binarySearch(array, start, end, target, k) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    
    if (mid + k > array.length - 1 || target - array[mid] <= array[mid + k] - target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}