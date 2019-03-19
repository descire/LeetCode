/**
 * https://leetcode.com/problems/largest-divisible-subset/
 * 
 * 368. Largest Divisible Subset
 * 
 * Medium
 */
const largestDivisibleSubset = nums => {
  const max = nums.length
  if (max === 0) {
    return []
  }
  if (max === 1) {
    return [nums[0]]
  }

  nums.sort((a, b) => a - b)

  const dp = [1]
  const map = new Map()
  map.set(0, [nums[0]])

  for (let i = 1; i < max; i++) {
    const targetEl = nums[i]
    dp[i] = 1
    map.set(i, [targetEl])
    for (let j = i - 1; j >= 0; j--) {
      const preEl = nums[j]
      if (targetEl % preEl === 0) {
        const total = dp[j] + 1
        if (total > dp[i]) {
          dp[i] = total
          map.set(i, map.get(j).concat(targetEl))
        }
      }
    }
  }
  let maxSize = Number.MIN_SAFE_INTEGER
  let result = null
  for (let [key, ans] of map) {
    const len = ans.length
    if (len > maxSize) {
      maxSize = len
      result = ans
    }
  }
  return result
}