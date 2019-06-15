/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * 33. Search in Rotated Sorted Array
 * 
 * Medium
 * 
 * 48ms 98.15%
 * 33.7mb 90.53%
 */
const search = (nums, target) => {
  const max = nums.length - 1
  if (max === 0 && target === nums[0]) {
    return 0
  }
  let first = 0
  let last = max
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    if (nums[mid] === target) {
      return mid
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
    return first
  }
  return -1
}