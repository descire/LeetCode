/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 
 * 215. 数组中的第K个最大元素
 * 
 * Medium
 * 
 * 88ms 61.86%
 * 36.5mb 11.30%
 * 
 */
const findKthLargest = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}