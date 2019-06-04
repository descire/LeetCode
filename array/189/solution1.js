/**
 * https://leetcode.com/problems/rotate-array/
 * 
 * 189. Rotate Array
 * 
 * Easy
 * 
 * 92ms 54.25%
 * 35.4mb 38.76%
 */
const rotate = (nums, k) => {
  while (k--) {
    const item = nums.pop()
    nums.unshift(item)
  }
  return nums
}