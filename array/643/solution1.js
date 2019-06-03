/**
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * 
 * 643. Maximum Average Subarray I
 * 
 * Easy
 * 
 * 76ms 100%
 * 42.6mb 59.56%
 */
const findMaxAverage = (nums, k) => {

  const max = nums.length

  let sum = 0
  for (let i = 0;i < k; i++) {
    sum += nums[i]
  }

  let curSum = sum


  for (let i = k; i < max; i++) {
    const pre = nums[i - k]
    const cur = nums[i]
    curSum = curSum - pre + cur
    sum = Math.max(sum, curSum)
  }

  return sum / k
}