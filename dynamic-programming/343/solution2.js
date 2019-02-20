/**
 * https://leetcode.com/problems/integer-break/
 * 
 * 343. Integer Break
 * 
 * Medium
 * 
 */
const integerBreak = n => {
  const map = [0, 0, 1, 2, 4, 6, 9]

  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let ans = 1
  while (n > 6) {
    n -= 3
    ans *= 3
  }

  return ans * map[n]
}