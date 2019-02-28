/**
 * https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
 * 
 * 446. Arithmetic Slices II - Subsequence
 * 
 * Hard
 */
const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  let ans = 0
  const dp = new Array(max)
  dp[0] = {}
  for (let i = 1; i < max; i++) {
    const item = A[i]
    dp[i] = {}
    for (let j = 0; j < i; j++) {
      const pre = A[j]
      const diff = item - pre
      dp[i][diff] = (dp[i][diff] || 0) + 1
      if (dp[j][diff]) {
        dp[i][diff] += dp[j][diff]
        ans += dp[j][diff]
      }
    }  
  }
  return ans
}
