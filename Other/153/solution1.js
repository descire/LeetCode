/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * 153. Find Minimum in Rotated Sorted Array
 * 
 * Medium
 * 
 * 52ms 94.11%
 * 33.8mb 71.58%
 */
const findMin = nums => {

  let preItem = nums[0]
  let index = 1
  const max = nums.length
  while (index < max) {
    const item = nums[index]
    if (item < preItem) {
      return item
    }
    index++
  }
  return preItem
}