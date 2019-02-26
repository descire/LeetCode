/**
 * https://leetcode.com/problems/delete-and-earn/
 * 
 * 740. Delete and Earn
 * 
 * Medium
 * 
 */
const deleteAndEarn = nums => {
  const cache = {}
  const max = nums.length

  if (max === 0) {
    return 0
  }

  let maxNumber = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < max; i++) {
    const item = nums[i]
    maxNumber = Math.max(maxNumber, item)
    cache[item] || (cache[item] = 0)
    cache[item]++
  }

  const dp = []
  dp[0] = 0
  if (cache[1]) {
    dp[1] = 1 * cache[1]
  } else {
    dp[1] = 0
  }
  for (let i = 2; i <= maxNumber; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + i * (cache[i] || 0))
  }
  return dp[maxNumber]
}

console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))