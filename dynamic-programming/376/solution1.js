/**
 * https://leetcode.com/problems/wiggle-subsequence/
 * 
 * 376. Wiggle Subsequence
 * 
 * Medium
 */
const wiggleMaxLength = nums => {
  const max = nums.length
  if (max === 0) {
    return 0
  }
  if (max === 1) {
    return 1
  }

  const up = new Array(max).fill(1)
  const down = new Array(max).fill(1)

  for (let i = 1; i < max; i++) {
    const cur = nums[i]
    const pre = nums[i - 1]
    if (cur > pre) {
      up[i] = down[i - 1] + 1
      down[i] = down[i - 1]
      continue
    }
    if (cur < pre) {
      down[i] = up[i - 1] + 1
      up[i] = up[i - 1]
      continue
    }
    down[i] = down[i - 1]
    up[i] = up[i - 1]
  }

  return Math.max(down[max - 1], up[max - 1])
}