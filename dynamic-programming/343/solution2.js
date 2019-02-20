/**
 * https://leetcode.com/problems/integer-break/
 * 
 * 343. Integer Break
 * 
 * Medium
 * 
 */
const integerBreak = n => {
  const map = [0, 0, 1, 2, 4]

  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let ans = 1
  while (n > 4) {
    n -= 3
    ans *= 3
  }

  return ans * Math.max(map[n], n)
}