/**
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
 * 
 * 673. Number of Longest Increasing Subsequence
 * 
 * [Medium]
 * 
 * dp 
 * 
 * 在300的基础上就需要最大单调递增序列的个数
 * 
 * 需要定义两个状态
 * 
 * dp[i] 以下标i的字符结尾的最长单调递增序列的长度
 * 
 * amount[i] 以下标i的字符结尾的最长单调递增序列的个数
 */

const findNumberOfLIS = nums => {
  const max = nums.length
  let ans = 0
  if (max === 0) {
    return ans
  }

  const dp = new Array(max).fill(1) // 维护最长单调递增序列的长度

  const amount = new Array(max).fill(1) // 维护最大单调递增序列的个数
  for (let i = 0; i < max; i++) {
    const item = nums[i]
    for (let j = 0; j < i; j++) {
      const sub = nums[j]
      if (item > sub) {
        // 这个地方需要改造一下
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          amount[i] = amount[j]
        } else if (dp[j] + 1 === dp[i]) {
          amount[i] += amount[j]
        }
      }
    }
    ans = Math.max(ans, dp[i])
  }
  let sum = 0
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === ans) {
      sum += amount[i]
    }
  }
  return sum
}