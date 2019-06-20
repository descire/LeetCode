/**
 * https://leetcode.com/problems/move-zeroes/
 * 
 * 283. Move Zeroes
 * 
 * Easy
 * 
 * 60ms 92.57%
 * 35.9mb 25.26%
 */
const moveZeroes = nums => {
  const max = nums.length
  let index = 0
  for (let i = 0; i < max; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i]
      index++
    }
  }

  for (let i = index; i < max; i++) {
    nums[i] = 0
  }

  return nums
}