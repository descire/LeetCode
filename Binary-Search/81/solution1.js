/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * 
 * 81. Search in Rotated Sorted Array II
 * 
 * Medium
 * 
 * 44ms 99.72%
 * 34mb 89.39%
 */
const search = (nums, target) => {
  const max = nums.length - 1
  if (max === 0 && target === nums[0]) {
    return true
  }
  let first = 0
  let last = max
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (nums[mid] === target) {
      return true
    }
    // 处理重复值
    if (nums[mid] === nums[last]) {
      last--
      continue
    }
    if (nums[mid] < nums[last]) {
      // mid --- last 递增区间
      if (nums[mid] < target && target <= nums[last]) {
        first = mid + 1
      } else {
        last = mid - 1
      }
    } else if (nums[mid] > nums[last]) {
      // first ---- mid 递增区间
      if (nums[first] <= target && target < nums[mid]) {
        last = mid - 1
      } else {
        first = mid + 1
      }
    }
  }
  if (nums[first] === target) {
    return true
  }
  return false
}
