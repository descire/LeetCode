/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * 
 * 152. Maximum Product Subarray
 * 
 * Medium
 * 
 * TLE
 */
const maxProduct = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  let minMul = nums[0]
  let maxMul = nums[0]
  let ans = nums[0]
  for (let i = 1; i < max; i++) {
    let a = minMul * nums[i]
    let b = maxMul * nums[i]
    maxMul = Math.max(a, b, nums[i])
    minMul = Math.min(a, b, nums[i])
    ans = Math.max(ans, maxMul)
  }
  return ans
}