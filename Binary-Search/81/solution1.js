/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * 
 * 81. Search in Rotated Sorted Array II
 * 
 * Medium
 * 
 * 44ms 99.72%
 * 34mb 89.39%
 * 
 * 33 题 的变题
 * 
 * 处理 由于 重复数字导致区间划分不正确
 */
const search = (nums, target) => {
  const max = nums.length - 1
  let start = 0
  let end = max

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)

    // 处理重复数字
    if (nums[start] === nums[end]) {
      start++
      continue
    }

    // 划分区间
    if (nums[start] > nums[end]) {
      // 当前搜索区间横跨两个递增数组

      if (nums[mid] <= nums[end]) {
        // 在第二个递增区间上
        if (target > nums[mid] && target <= nums[end]) {
          start = mid + 1
        } else {
          end = mid
        }
      } else {
        // 在第一个递增区间
        if (target <= nums[mid] && target > nums[end]) {
          end = mid
        } else {
          start = mid + 1
        }
      }

    } else {
      // 只能在一个递增数组上搜索，属于正常情况
      if (nums[mid] < target) {
        start = mid + 1
      } else {
        end = mid
      }
    }
  }
  if (nums[start] === target) {
    return true
  }
  return false
}
