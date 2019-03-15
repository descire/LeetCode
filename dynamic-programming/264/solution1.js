/**
 * https://leetcode.com/problems/ugly-number-ii/
 * 
 * 
 * 264. Ugly Number II
 * 
 * Medium
 * 
 * 暴力求解
 */
const nthUglyNumber = n => {
  const ans = []

  for (let a = 1; a < Number.MAX_SAFE_INTEGER; a *= 2) {
    for (let b = a; b < Number.MAX_SAFE_INTEGER; b *= 3) {
      for (let c = b; c < Number.MAX_SAFE_INTEGER; c *= 5) {
        ans.push(c)
      }
    }
  }

  ans.sort((a, b) => a - b)
  return ans[n - 1]
}