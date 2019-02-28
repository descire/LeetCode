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
  const dp = new Array(max).fill(0).map(() => new Map())
  for (let i = 1; i < max; i++) {
    const item = A[i]
    for (let j = 0; j < i; j++) {
      const pre = A[j]
      const diff = item - pre
      dp[i].set(diff, (dp[i].get(diff) || 0) + 1)
      if (dp[j].get(diff)) {
        dp[i].set(diff, dp[i].get(diff) + dp[j].get(diff))
        ans += dp[j].get(diff)
      }
    }  
  }
  return ans
}
