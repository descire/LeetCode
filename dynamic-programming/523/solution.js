/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 * 
 * 523. Continuous Subarray Sum
 * 
 * Medium
 */
const checkSubarraySum = (nums, k) => {

  for (let i = 0, max = nums.length; i < max; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < max; j++) {
      sum += nums[j]
      if (sum === k) {
        return true
      }
      if (k !== 0 && sum % k === 0) {
        return true
      }
    }
  }

  return false
}