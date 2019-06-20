/**
 * https://leetcode.com/problems/move-zeroes/
 * 
 * 283. Move Zeroes
 * 
 * Easy
 * 
 * 数组 部分操作符太慢
 * 
 * 60ms  92.57%
 * 36mb 21.13%
 */
const moveZeroes = nums => {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    if (nums[start] === 0) {
      nums.splice(start, 1)
      nums.push(0)
      end--
      continue
    }
    start++
  }
  return nums
}