/**
 * https://leetcode.com/problems/find-pivot-index/
 * 
 * 724. Find Pivot Index
 * 
 * Easy
 * 
 * 92ms 43.93ms
 * 40.2mb 17.78%
 */
const pivotIndex = nums => {
  const max = nums.length
  const preSum = []
  const sufSum = []
  for (let i = 0; i < max; i++) {
    preSum[i] = (preSum[i - 1] || 0) + nums[i]
    sufSum[max - i - 1] = (sufSum[max - i] || 0) + nums[max - i - 1]
  }

  for (let i = 0; i < max; i++) {
    if (preSum[i] === sufSum[i]) {
      return i
    }
  }
  return -1
}