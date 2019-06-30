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

  const lower = binarySearch(nums, 0, max - 1, target, (middle, target) => middle >= target)

  if (nums[lower] !== target) {
    return [-1,-1]
  }

  const upper = binarySearch(nums, 0, max - 1, target, (middle, target) => middle > target)
  if (nums[upper] !== target) {
    return [lower, upper - 1]
  }
  return [lower, upper]
}

function binarySearch(array, start, end, target, compareFunc) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (compareFunc(array[mid], target)) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return start
}