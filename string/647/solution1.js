/**
 * https://leetcode.com/problems/palindromic-substrings/
 * 
 * 647. Palindromic Substrings
 * 
 * Medium
 */
const countSubstrings = s => {
  const max = s.length - 1

  const dp = []
  let ans = 0
  for (let i = max; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j <= max; j++) {
      if (i === j) {
        dp[i][j] = true
        ans++
        continue
      }
      if (s[i] === s[j] && (j - i <= 1 ? true : dp[i + 1][j - 1])) {
        dp[i][j] = true
        ans++
      }
    }
  }

  return ans
}