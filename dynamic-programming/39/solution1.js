/**
 * 
 * https://leetcode.com/problems/combination-sum/
 * 
 * 39. Combination Sum
 * 
 * Medium
 * 
 * DFS + hashmap
 * 
 */
const combinationSum = (candidates, target) => {
  const ans = []
  const cache = new Map()
  dfs(candidates, 0, [])
  return ans
  function dfs (candidates, sum, arr) {
    if (sum === target) {
      const key = arr.sort().join()
      if (!cache.get(key)) {
        ans.push(arr)
        cache.set(key, true)
      }
      return
    }
    if (sum > target) {
      return
    }

    for (let i = 0; i < candidates.length; i++) {
      dfs(candidates, sum + candidates[i], arr.concat(candidates[i]))
    }
  }
}