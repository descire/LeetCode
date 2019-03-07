/**
 * https://leetcode.com/problems/count-primes/
 * 
 * 204. Count Primes
 * 
 * Medium
 * 
 * 筛子法
 */
const countPrimes = n => {
  if (n < 3) {
    return 0
  }
  const dp = new Array(n).fill(1)

  dp[0] = 0
  dp[1] = 0

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!dp[i]) {
      continue
    }
    for (let j = i * i; j < n; j += i) {
      dp[j] = 0
    }
  }

  return dp.reduce((a, b) => a + b, 0)
}
