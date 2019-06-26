/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 
 * 852. Peak Index in a Mountain Array
 * 
 * Easy
 * 
 * 48ms 98.70%
 * 34.3mb 72.89%
 */
const peakIndexInMountainArray = A => {
  return binarySearch(A, 0, A.length - 1)
}

function binarySearch(array, start, end) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (array[mid + 1] > array[mid]) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return start
}