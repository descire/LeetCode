/**
 * 
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 * 
 * 
 * 516. Longest Palindromic Subsequence
 * 
 * Medium
 *                  dp[i + 1]dp[j - 1]  s[i] = s[j]
 * dp[i][j]   =     
 *                  max(dp[i + 1][j], dp[i][j - 1]) s[i] != s[j]
 *         
 */
const longestPalindromeSubseq = s => {
  const max = s.length
  const dp = []
  for (let i = 0; i <= max; i++) {
    dp[i] = []
    for (let j = 0; j <= max; j++) {
      if (i === j) {
        dp[i][j] = 1
        continue
      }
      dp[i][j] = 0
    }
  }
  for (let j = 1; j <= max; j++) {
    for (let i = j - 1; i >= 1; i--) {
      if (s[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[1][max]
}