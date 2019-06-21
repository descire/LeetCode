/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * 
 * 350. 两个数组的交集 II
 * 
 * Easy
 * 
 * 97.54%
 * 13.56%
 */
const intersect = (nums1, nums2) => {

  const record = new Map()
  for (let i = 0, max = nums1.length; i < max; i++) {
    const num = nums1[i]
    if (!record.has(num)) {
      record.set(num, 0)
    }
    record.set(num, record.get(num) + 1)
  }

  const result = []

  for (let i = 0, max = nums2.length; i < max; i++) {
    const num = nums2[i]
    const count = record.get(num)
    if (count) {
      result.push(num)
      record.set(num, count - 1)
    }
  }
  return result
}