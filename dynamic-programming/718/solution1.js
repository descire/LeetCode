/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 * 
 * 718. Maximum Length of Repeated Subarray
 * 
 * Medium
 */
const findLength = (A, B) => {
  const l1 = A.length
  const l2 = B.length
  if (l1 === 0 || l2 === 0) {
    return 0
  }

  const dp = []

  let ans = 0

  for (let i = 0; i <= l1; i++) {
    dp[i] = []
    for (let j = 0; j <= l2; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else {
        dp[i][j] = (A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0)
        ans = Math.max(dp[i][j], ans)
      }
    }
  }
  return ans
}