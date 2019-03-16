/**
 * https://leetcode.com/problems/ugly-number/
 * 
 * 263. Ugly Number
 * 
 * Medium
 */
const isUgly = num => {
  if (num < 1) {
    return false
  }
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2
      continue
    }
    if (num % 3 === 0) {
      num /= 3
      continue
    }
    if (num % 5 === 0) {
      num /= 5
      continue
    }
    return false
  }

  return true
}