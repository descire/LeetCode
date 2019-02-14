/**
 * 
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * 
 * 674. Longest Continuous Increasing Subsequence
 * 
 * [Easy]
 * 
 * dp
 * 
 * 定义状态
 * 
 *  dp[i]表示以下标i结尾的递增序列的长度
 * 
 * 边界状态
 * 
 *  无
 * 
 * 状态转移方程
 *             1               nums[i] <= nums[i - 1]
 *  dp[i] =
 *             dp[i - 1] + 1   nums[i] > nums[i - 1]
 * 
 * 
 */

const findLengthOfLCIS = nums => {
  const max = nums.length
  let ans = 0
  if (max === 0) {
    return ans
  }
  ans = 1
  if (max === 1) {
    return ans
  }

  let current = 1 // 当前递增序列的长度
  let preItem = nums[0] // 前一个元素

  for (let i = 1; i < max; i++) {
    const item = nums[i]
    if (item > preItem) {
      current++
    } else {
      current = 1
    }
    preItem = item
    ans = Math.max(ans, current)
  }
  return ans
}