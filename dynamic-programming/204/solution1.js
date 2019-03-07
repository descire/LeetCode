/**
 * https://leetcode.com/problems/count-primes/
 * 
 * 204. Count Primes
 * 
 * Medium
 * 
 * TLE
 */
const countPrimes = n => {
  const dp = new Array(n)
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]
    if (isPrimes(i - 1)) {
      dp[i] += 1
    }
  }
  return dp[n]
}

function isPrimes (n) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}