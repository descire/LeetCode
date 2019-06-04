/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * 
 * 219. Contains Duplicate II
 * 
 * Easy
 * 
 * 52ms 100%
 * 40.1mb 67.12%
 */
const containsNearbyDuplicate = (nums, k) => {
  const len = nums.length
  const m = new Map()

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (!m.has(num)) {
      m.set(num, i)
      continue
    }

    const j = m.get(num)
    if (i - j <= k) {
      return true
    }
    m.set(num, i)
  }
  return false
}