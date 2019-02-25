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
  dfs(0, S)
  return ans
  function dfs (startIndex, S) {
    if (startIndex === max) {
      if (S - nums[startIndex] === 0) {
        ans++
      }
      if (S + nums[startIndex] === 0) {
        ans++
      }
      return
    }
    dfs(startIndex + 1, S - nums[startIndex])
    dfs(startIndex + 1, S + nums[startIndex])
  }
}