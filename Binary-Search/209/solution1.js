/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * 209. Minimum Size Subarray Sum
 * 
 * Medium
 * 
 * 220ms 12.92%
 * 35.5ms 63.30%
 */
const minSubArrayLen = (s, nums) => {
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0, max = nums.length; i < max; i++) {
    let sum = 0
    let index = i
    let count = 0
    while (sum < s && index < max) {
      sum += nums[index]
      count++
      index++
    }
    if (sum >= s) {
      ans = Math.min(ans, count)
    }
  }
  if (ans === Number.MAX_SAFE_INTEGER) {
    return 0
  }
  return ans
}