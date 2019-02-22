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
 * 优化存储空间。O(n)
 *         
 */
const longestPalindromeSubseq = s => {
  const max = s.length
  let dp = new Array(max + 1).fill(0)

  for (let i = max; i >= 1; i--) {
    let temp = new Array(max + 1).fill(0)
    temp[i] = 1
    for (let j = i + 1; j <= max; j++) {
      if (s[i - 1] === s[j - 1]) {
        temp[j] = dp[j - 1] + 2
      } else {
        temp[j] = Math.max(dp[j], temp[j - 1])
      }
    }
    dp = temp
  }
  return dp[max]
}