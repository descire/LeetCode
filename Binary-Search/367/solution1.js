/**
 * https://leetcode.com/problems/valid-perfect-square/
 * 
 * 367. Valid Perfect Square
 * 
 * Easy
 * 
 * 40ms 99.67%
 * 33.8mb 79.73%
 */
const isPerfectSquare = num => {
  // 边界情况
  if (num === 1) {
    return true
  }
  let first = 1
  let last = num

  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    const ret = mid * mid
    if (ret === num) {
      return true
    }
    if (ret > num) {
      last = mid
    } else {
      first = mid + 1
    }
  }

  return false
}