/**
 * https://leetcode.com/problems/move-zeroes/
 * 
 * 283. Move Zeroes
 * 
 * Easy
 */
const moveZeroes = nums => {
  const max = nums.length

  let start = 0
  let end = max - 1

  while (start < end) {
    const item = nums[start]
    if (item === 0) {
      nums.splice(start, 1)
      nums.push(0)
      end--
      continue
    }
    start++
  }

  return nums
}