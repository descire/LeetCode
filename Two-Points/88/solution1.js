/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 
 * 88. 合并两个有序数组
 * 
 * Easy
 * 
 * 95.92%
 * 61.28%
 */
const merge = (nums1, m, nums2, n) => {
  let index = m + n - 1
  let end1 = m - 1
  let end2 = n - 1
  while (end1 >= 0 || end2 >= 0) {
    const num1 = nums1[end1] === undefined ? Number.MIN_SAFE_INTEGER : nums1[end1]
    const num2 = nums2[end2] === undefined ? Number.MIN_SAFE_INTEGER : nums2[end2]
    if (num1 >= num2) {
      nums1[index] = num1
      index--
      end1--
      continue
    } else {
      nums1[index] = num2
      end2--
      index--
    }
  }
}