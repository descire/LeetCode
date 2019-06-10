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

function binarySearch(array, first, end) {
  while (first < end - 1) {
    const mid = Math.floor(first + (end - first) / 2) // 数组下标注意整数
    if (array[mid + 1] > array[mid]) {
      first = mid
    } else {
      end = mid
    }
  }

  return (array[first] > array[end] ? first : end)
}