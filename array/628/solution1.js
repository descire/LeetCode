/**
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 * 
 * 628. Maximum Product of Three Numbers
 * 
 * Easy
 * 
 * 104ms 59.86%
 * 38.3mb 33.96%
 */
const maximumProduct = nums => {

  nums.sort((a, b) => a - b)

  const max = nums.length

  let x = nums[max - 1] * nums[max - 2] * nums[max - 3]

  let y = nums[0] * nums[1] * nums[max - 1]

  return Math.max(x, y)
}