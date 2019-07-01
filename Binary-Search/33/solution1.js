/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * 33. Search in Rotated Sorted Array
 * 
 * Medium
 * 
 * 48ms 98.15%
 * 33.7mb 90.53%
 * 
 * 递增 递增 序列
 * 
 * 852. 山脉数组的峰顶索引
 * 
 * 162. 寻找峰值
 * 
 * 这两道题都是 递增 递减 
 * 
 * 从题目中可以得出两个信息 
 * 1、递增 递增
 * 2、对于任何一个数 知道它 落在 那个 递增区间里
 * 
 * 分为两部分处理
 * 1、当前搜索区间只在一个递增区间上，那么和一般的二分搜索没啥区别
 * 
 * 2、当前搜索区间横跨两个递增区间上，这个就需要特殊处理
 */
const search = (nums, target) => {
  const max = nums.length - 1
  let start = 0
  let end = max

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
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
    return start
  }
  return -1
}