/**
 * https://leetcode.com/problems/target-sum/
 * 
 * 494. Target Sum
 * 
 * Medium
 */
const findTargetSumWays = (nums, S) => {
  let ans = 0
  let max = nums.length - 1
  help(0, S)
  return ans
  function help (startIndex, S) {
    if (startIndex === max) {
      if (S - nums[startIndex] === 0) {
        ans++
      }
      if (S + nums[startIndex] === 0) {
        ans++
      }
      return
    }
    help(startIndex + 1, S - nums[startIndex])
    help(startIndex + 1, S + nums[startIndex])
  }
}