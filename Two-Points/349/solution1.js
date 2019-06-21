/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * 349. Intersection of Two Arrays
 * 
 * Easy
 * 
 * 97.18%
 * 13.61%
 * 
 * 非双指针题目 
 * 采用 集合处理
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1)
  const s2 = new Set()
  for (let num of nums2) {
    if (s1.has(num)) {
      s2.add(num)
    }
  }
  return [...s2]
}