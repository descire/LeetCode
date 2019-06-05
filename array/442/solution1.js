/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * 
 * 442. Find All Duplicates in an Array
 * 
 * Easy
 * 
 * 120ms 64.48%
 * 57.9mb 5.59%
 */
const findDuplicates = nums => {
  const max = nums.length
  const cache = new Map()
  for (let i = 0; i < max; i++) {
    const num = nums[i]
    if (!cache.has(num)) {
      cache.set(num, 0)
    }
    cache.set(num, cache.get(num) + 1)
  }
  const ans = []
  for (let [key, value] of cache.entries()) {
    if (key >= 1 && key <= max && value === 2) {
      ans.push(key)
    }
  }
  return ans
}