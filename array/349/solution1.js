/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * 349. Intersection of Two Arrays
 * 
 * Easy
 * 
 * 48ms 99.49%
 * 34.8MB 52.93%
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  const result = []
  for (let item of s2.values()) {
    if (s1.has(item)) {
      result.push(item)
    }
  }

  return result
}