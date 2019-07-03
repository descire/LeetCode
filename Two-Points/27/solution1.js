/**
 * https://leetcode-cn.com/problems/remove-element/
 * 
 * 27. 移除元素
 * 
 * Easy
 * 
 * 97.20%
 * 33.05%
 * 
 * 注意终止条件的判断 start === end 时
 */
const removeElement = (nums, val) => {
  const max = nums.length
  let start = 0
  let end = max - 1

  while (start <= end) {
    if (nums[end] === val) {
      nums.pop()
      end--
      continue
    }
    if (nums[start] === val) {
      nums[start] = nums[end]
      nums.pop()
      end--
      start++
      continue
    }
    start++
  }
  return nums.length
}