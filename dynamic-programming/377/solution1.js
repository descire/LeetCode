/**
 * 
 * https://leetcode.com/problems/combination-sum-iv/
 * 
 * 377. Combination Sum IV
 * 
 * Medium
 * 
 * TLES
 * 
 * 时间复杂度 O(len^(target / min))
 */
const combinationSum4 = (nums, target) => {
  let ans = 0
  dfs(nums, 0)

  return ans

  function dfs (nums, sum) {
    if (sum === target) {
      ans++
      return
    }
    if (sum > target) {
      return
    }

    for (let i = 0; i < nums.length; i++) {
      dfs(nums, sum + nums[i])
    }
  }
}