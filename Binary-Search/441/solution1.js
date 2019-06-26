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
  let start = 0
  let end = n
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    const target = (mid + 1) * mid / 2
    if (n > target) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  if ((start + 1) * start / 2 > n) {
    return start - 1
  }
  return start
}