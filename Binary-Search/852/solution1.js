/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 
 * 852. Peak Index in a Mountain Array
 * 
 * Easy
 * 
 * 普通解法
 */
const peakIndexInMountainArray = A => {
  const max = A.length
  for (let i = 0; i < max;i++) {
    if (A[i + 1] < A[i]) {
      return i
    }
  }
}