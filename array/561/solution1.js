/**
 * https://leetcode.com/problems/array-partition-i/
 * 
 * 561. Array Partition I
 * 
 * Easy
 */
const arrayPairSum = nums => {
  nums.sort((a, b) => a - b)
  let ans = 0
  for (let i = 0, max = nums.length; i < max; i += 2) {
    ans += nums[i]
  }
  return ans
}