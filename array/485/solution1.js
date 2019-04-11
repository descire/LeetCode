/**
 * https://leetcode.com/problems/max-consecutive-ones/
 * 
 * 485. Max Consecutive Ones
 * 
 * Easy
 */
const findMaxConsecutiveOnes = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  let ans = 0
  let current = 0
  for (let i = 0; i < max; i++) {
    const num = nums[i]
    if (num === 1) {
      current += 1
    } else {
      ans = Math.max(ans, current)
      current = 0
    }
  }
  ans = Math.max(ans, current)
  return ans
}