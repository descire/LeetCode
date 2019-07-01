/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * 153. 寻找旋转排序数组中的最小值
 * 
 * Medium
 * 
 * 一类题型 33 81
 * 
 * 这道题目相对比较简单
 * 
 * 68ms 99.04%
 * 33.6mb 63.89%
 * 
 */
const findMin = nums => {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return nums[start]
}