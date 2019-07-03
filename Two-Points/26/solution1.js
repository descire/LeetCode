/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 
 * 26. 删除排序数组中的重复项
 * 
 * Easy
 * 
 * 96.77%
 * 67.72%
 */
const removeDuplicates = nums => {
  const max = nums.length
  if (max === 1) {
    return nums
  }
  let slow = 1
  for (let fast = 1; fast < max; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
      continue
    }
  }
  let count = max - slow
  while (count > 0) {
    nums.pop()
    count--
  }
  return nums.length
}