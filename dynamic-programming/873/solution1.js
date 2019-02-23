/**
 * https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
 * 
 * 873. Length of Longest Fibonacci Subsequence
 * 
 * Medium
 * 
 */
const lenLongestFibSubseq = A => {
  const max = A.length
  if (max < 3) {
    return 0
  }

  const cache = {}

  let dp = []
  let ans = 0
  // 记录每个数字的下标
  for (let i = 0; i < max; i++) {
    dp[i] = []
    cache[A[i]] = i
  }

  for (let i = 1; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      const rest = A[j] - A[i]
      const index = cache[rest]
      if (index !== undefined && index < i) {
        dp[i][j] = (dp[index][i] || 0) + 1
        ans = Math.max(dp[i][j], ans)
      }
    }
  }

  return (ans === 0 ? ans : ans + 2)
}