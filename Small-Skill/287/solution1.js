/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * 
 * 287. Find the Duplicate Number
 * 
 * Medium
 * 
 * 56ms 93.47%
 * 36.4mb 37.72%
 */
const findDuplicate = nums => {
  const s = new Set()
  const max = nums.length
  for (let i = 0; i < max; i++) {
    const item = nums[i]
    if (s.has(item)) {
      return item
    }
    s.add(item)
  }
}