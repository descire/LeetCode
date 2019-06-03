/**
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 * 
 * 747. Largest Number At Least Twice of Others
 * 
 * Easy
 * 
 * 60ms 86.33%
 * 33.8mb 59.68%
 */
const dominantIndex = nums => {

  const max = nums.length

  if (max === 0) {
    return -1
  }


  if (max === 1) {
    return 0
  }

  let x = nums[0]
  let y = Number.MIN_SAFE_INTEGER

  let index = 0
  for (let i = 1; i < max; i++) {
    const num = nums[i]
    if (x < num) {
      y = x
      x = num
      index = i
    } else {
      y = Math.max(y, num)
    }
  }
  if (Math.floor(x / y) >= 2) {
    return index
  }
  return -1
}