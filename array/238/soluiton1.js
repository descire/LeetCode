/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * 238. Product of Array Except Self
 * 
 * Medium
 * 
 * 76ms 97.26%
 * 41.5mb 98.79%
 */
const productExceptSelf = nums => {
  let zeroCount = 0
  const product = nums.reduce((a, b) => {
    if (a === 0) {
      zeroCount++
      a = 1
    }
    if (b === 0) {
      zeroCount++
      b = 1
    }
    return a * b
  }, 1)

  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i]
    if (num === 0) {
      if (zeroCount - 1 === 0) {
        nums[i] = product
      } else {
        nums[i] = 0
      }
    } else {
      if (zeroCount === 0) {
        nums[i] = product / num
      } else {
        nums[i] = 0
      }
    }
  }

  return nums
}