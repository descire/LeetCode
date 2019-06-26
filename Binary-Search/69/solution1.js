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
  let start = 1
  let end = x

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    const middle = mid * mid
    if (x > middle) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  if (start ** 2 === x) {
    return start
  }  
  return start - 1
}