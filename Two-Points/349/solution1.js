/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * 349. Intersection of Two Arrays
 * 
 * Easy
 * 
 * 48ms 99.34%
 * 34.8mb 57.93%
 * 
 * 非双指针题目 
 * 采用 集合处理
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  const result = []
  for (let num of s1.values()) {
    if (s2.has(num)) {
      result.push(num)
    }
  }
  return result
}