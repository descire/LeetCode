/**
 * https://leetcode.com/problems/house-robber-ii/
 * 
 * 213. House Robber II
 * 
 * [Medium]
 * 
 * 198的变题
 * 
 * 考虑首位是邻居的问题
 */
const rob = nums => {
  const max = nums.length
  if (max === 0) {
    return 0
  }
  if (max === 1) {
    return nums[0]
  }
  const pre = robSub(0, max - 2)
  const suf = robSub(1, max - 1)

  return Math.max(pre, suf)

  function robSub (start, end) {
    const len = end - start
    if (len === 0) {
      return nums[start]
    }

    const dp = new Array(len + 1).fill(0)
    let index = 0
    dp[++index] = nums[start]
    for (let i = start + 1; i <= end; i++) {
      dp[++index] = Math.max(dp[index - 1], dp[index - 2] + nums[i])
    }
    return dp[len + 1]
  }
}