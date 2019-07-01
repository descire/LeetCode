/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * 209. Minimum Size Subarray Sum
 * 
 * Medium
 * 
 * 双指针 解法
 * 
 * 76ms 97.96%
 * 35.5MB 40.00%
 */
const minSubArrayLen = (s, nums) => {
  let ans = Number.MAX_SAFE_INTEGER
  const max = nums.length
  let start = end = 0
  let sum = nums[0]
  if (sum >= s) {
    ans = 1
  }

  while (start < max && end < max) {
    if (sum >= s) {
      ans = Math.min(ans, end - start + 1)
      sum -= nums[start++]
    } else {
      sum += nums[++end]
    }
  } 

  if (ans === Number.MAX_SAFE_INTEGER) {
    return 0
  }
  return ans
}