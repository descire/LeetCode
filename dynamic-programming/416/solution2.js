/**
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * 
 * 416. Partition Equal Subset Sum
 * 
 * Medium
 */
const canPartition = nums => {
  const sum = nums.reduce((x, y) => x + y, 0)

  if (sum % 2 !== 0) {
    return false
  }

  const subSum = sum / 2
  const max = nums.length

  const dp = new Array(max + 1)

  for (let i = 0; i <= max; i++) {
    dp[i] = [true]
  }
  for (let i = 1; i <= subSum; i++) {
    dp[0][i] = false
  }

  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= subSum; j++) {
      dp[i][j] = dp[i - 1][j]
      const item = nums[i - 1]
      if (j >= item) {
        dp[i][j] = (dp[i][j] || dp[i - 1][j - item])
      }
    }
  }

  return dp[max][subSum]
}