/**
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * 217. Contains Duplicate
 * 
 * Easy
 * 
 * 60ms 98.10%
 * 
 * 40MB 70.65%
 */
const containsDuplicate = nums => {
  const s = new Set()

  for (let i = 0, max = nums.length; i < max; i++) {
    const n = nums[i]
    if (s.has(n)) {
      return true
    }
    s.add(n)
  }
  return false
}