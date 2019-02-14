/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * 300. Longest Increasing Subsequence
 * 
 * [Medium]
 * 
 * dp
 * 
 * 定义状态
 * 
 * 相比较674 本题中允许元素不连续。所以以下标i为结尾的单调递增序列 存在多条
 * 
 * 定义状态
 * 
 * dp[i] 表示以下标i结尾的最大单调递增序列的长度
 * 
 * 边界状态
 * 
 * dp[i] = 1  i ∈ [0, nums.length - 1]
 * 
 * 
 * 状态转移方程
 * 
 * 
 * dp[i] = Math.max(dp[j] + 1, dp[i]) j ∈ [0, i - 1] and nums[i] > nums[j]
 * 
 * 
 */

const lengthOfLIS = nums => {
  const len = nums.length
  let ans = 1
  if (len === 0) {
    return 0
  }
  const dp = new Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    let item = nums[i]
    for (let j = i - 1; j >= 0; j--) {
      const pre = nums[j]
      if (pre < item) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    ans = Math.max(dp[i], ans)
  }
  return ans
}