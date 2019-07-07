/**
 * https://leetcode-cn.com/problems/subarray-product-less-than-k/
 * 
 * 713. 乘积小于K的子数组
 * 
 * Medium
 * 
 * 滑动窗口
 * 
 * 116ms 100.00%
 * 41.9mb 62.50%
 */
const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) {
    return 0
  }
  let ans = 0
  let p = 1
  let start = 0
  let end = 0
  const max = nums.length
  for (;end < max; end++) {
    p *= nums[end]
    while (p >= k) {
      p /= nums[start++]
    }
    ans += end - start + 1
  }

  return ans
}