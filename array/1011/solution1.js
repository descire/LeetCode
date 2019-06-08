/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * 
 * 1011. Capacity To Ship Packages Within D Days
 * 
 * Medium
 * 
 * 64ms 100%
 * 27.8mb 42.60
 */
const shipWithinDays = (weights, D) => {
  const len = weights.length
  let min = Number.MIN_SAFE_INTEGER
  let max = 0
  for (let weight of weights) {
    max += weight
    min = Math.max(min, weight)
  }
  let ans = max
  while (min < max) {
    const mid = Math.floor((min + max) / 2)
    let days = 1
    let temp = 0
    for (let i = 0; i < len; i++) {
      temp += weights[i]
      if (temp > mid) {
        temp = weights[i]
        days++
      }
    }

    if (days <= D) {
      max = mid
      ans = ans < mid ? ans : mid
    } else {
      min = mid + 1
    }
  }

  return ans
}