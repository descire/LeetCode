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
  let index = 1
  for (let i = 1; i < max; i++) {
    if (nums[i] !== nums[index - 1]) {
      nums[index] = nums[i]
      index++
      continue
    }
  }
  let count = max - index
  while (count > 0) {
    nums.pop()
    count--
  }
  return nums.length
}