/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * 
 * 350. Intersection of Two Arrays II
 * 
 * Easy
 * 
 * 60ms 90.22%
 * 35.7mb 25.12%
 */
const intersect = (nums1, nums2) => {
  const map = new Map()
  const result = []
  for (let i = 0, max = nums2.length; i < max; i++) {
    const num = nums2[i]
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  for (let i = 0, max = nums1.length; i < max; i++) {
    const num = nums1[i]
    const count = map.get(num)
    if (count) {
      result.push(num)
      map.set(num, count - 1)
    }
  }

  return result
}