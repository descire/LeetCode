/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * 
 * 219. Contains Duplicate II
 * 
 * Easy
 */
const containsNearbyDuplicate = (nums, k) => {
  const len = nums.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j <= i + k && j < len; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }

  return false
}