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

  const cache = {}

  const dp = new Array(max)

  dp[0] = []
  dp[1] = []

  record(A[0], cache)
  record(A[1], cache)

  for (let i = 2; i < max; i++) {
    const item = A[i]
    dp[i] = []
    for (let j = i - 1; j >= 1; j--) {
      const pre = A[j]
      const diff = item - pre
      const rest = pre - diff
    }  
    record(item, cache)
  }

  for (let i = 0; i < dp.length; i++) {
    const item = dp[i]
    for (let j = 0; j < item.length; j++) {
      ans += (item[j] || 0)
    }
  }

  return ans
}

function record (item, cache) {
  cache[item] || (cache[item] = 0)
  cache[item]++
}