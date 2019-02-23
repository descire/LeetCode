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
  // 记录每个数字的下标
  for (let i = 0; i < max; i++) {
    cache[A[i]] = i
  }
  
  let dp = []
  let ans = 0

  for (let i = 0; i < max; i++) {
    dp[i] = []
    for (let j = 0; j < max; j++) {
      dp[i][j] = 0
    }
  }

  for (let i = 1; i < max; i++) {
    for (let j = 2; j < max; j++) {

      const rest = A[j] - A[i]
      const index = cache[rest]
      if (index !== undefined && index < i) {
        dp[i][j] = dp[index][i] + 1
      }
      ans = Math.max(dp[i][j], ans)
    }
  }

  return (ans === 0 ? ans : ans + 2)
}