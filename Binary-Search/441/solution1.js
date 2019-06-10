/**
 * https://leetcode.com/problems/arranging-coins/
 * 
 * 441. Arranging Coins
 * 
 * Easy
 * 
 * (k + 1) * k / 2
 * 
 * 60ms 100.00%
 * 36mb 90.18%
 */

const arrangeCoins = n => {
  // 边界情况
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  let first = 0
  let last = n
  let ret = 0
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    const target = (mid + 1) * mid / 2
    if (target > n) {
      last = mid
    } else {
      first = mid + 1
    }
  }

  return first - 1
}