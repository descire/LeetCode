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
  let start = 1
  let end = num

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    const middle = mid * mid
    if (num > middle) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return start ** 2 === num
}