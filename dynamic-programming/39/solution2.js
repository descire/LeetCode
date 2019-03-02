/**
 * 
 * https://leetcode.com/problems/combination-sum/
 * 
 * 39. Combination Sum
 * 
 * Medium
 * 
 * DFS
 * 
 */
var combinationSum = function(candidates, target) {
  const ans = []
  const dfs = (currentIndex, currentArray, target) => {
    if (target === 0) {
      ans.push(currentArray.slice())
      return 
    }
    if (target < 0) {
      return
    }

    for (let i = currentIndex; i < candidates.length; ++i) {
      currentArray.push(candidates[i])
      dfs(i, currentArray, target - candidates[i])
      currentArray.pop()
    }
  }
  dfs(0, [], target)
  return ans
}