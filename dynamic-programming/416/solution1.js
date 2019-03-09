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
  nums.sort((a, b) => a - b)
  const subSum = sum / 2

  let ans = false
  dfs(0, 0)
  return ans
  function dfs (startIndex, sum) {
    if (sum === subSum) {
      ans = true
      return
    }
    if (sum > subSum) {
      return
    }

    for (let i = startIndex; i < nums.length; i++) {
      dfs(i + 1, sum + nums[i])
    }
  }
}