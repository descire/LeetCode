/**
 * DP
 * 
 * dp[i] 表示1以A[i]结尾的等差数列的个数
 * 
 * dp[0] = 0
 * dp[1] = 0
 * 
 *          |  dp[i - 1] + 1  A[i] - A[i - 1] === A[i - 1] - A[i - 2] 
 * dp[i] =  |
 *          |  0
 */

const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  const dp = [0, 0]
  let sum = 0

  for (let i = 2; i < max; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = 0
    }
    sum += dp[i]
  }
  return sum
}