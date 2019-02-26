/**
 * https://leetcode.com/problems/delete-and-earn/
 * 
 * 740. Delete and Earn
 * 
 * Medium
 * 
 * TLE
 */
const deleteAndEarn = nums => {
  let ans = 0
  dfs(nums, 0)
  return ans
  function dfs (nums, sum) {
    const max = nums.length
    if (max === 0) {
      ans = Math.max(sum, ans)
      return
    }

    for (let i = 0; i < max; i++) {
      dfs(getNewArray(nums, nums[i], i), sum + nums[i])
    }
  }
}

function getNewArray (nums, target, index) {
  const result = []
  for (let i = 0, max = nums.length; i < max; i++) {
    const item = nums[i]
    if (i !== index && item != target - 1 && item !== target + 1) {
      result.push(item)
    }
  }
  return result
}

console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))