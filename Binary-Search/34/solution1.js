/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * 34. Find First and Last Position of Element in Sorted Array
 * 
 * Medium
 * 
 * 52ms 94.28%
 * 35.1% 62.38%
 */
const searchRange = function (nums, target)  {
  const max = nums.length
  if (max === 0) {
    return [-1, -1]
  }

  let lower = 0
  let last = max - 1
  while (lower < last) {
    const mid = Math.floor(lower + (last - lower) / 2)
    if (nums[mid] >= target) {
      last = mid
    } else {
      lower = mid + 1
    }
  }

  let upper = 0
  last = max - 1
  while (upper < last) {
    const mid = Math.floor(upper + (last - upper) / 2)
    if (nums[mid] > target) {
      last = mid
    } else {
      upper = mid + 1
    }
  }

  if (nums[upper] !== target && nums[lower] !== target) {
    return [-1,-1]
  }

  if (nums[upper] !== target) {
    upper--
  }

  return [lower, upper]
}