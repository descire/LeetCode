/**
 * https://leetcode.com/problems/sqrtx/
 * 
 * 69. Sqrt(x)
 * 
 * Easy
 * 
 * 68ms 96.10%
 * 35.7mb 47.66%
 */
const mySqrt = x => {
  if (x === 1) {
    return 1
  }
  let first = 1
  let last = x

  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    const target = mid * mid
    if (target === x) {
      return mid
    }
    if (target > x) {
      last = mid
    } else {
      first = mid + 1
    }
  }

  return first - 1
}