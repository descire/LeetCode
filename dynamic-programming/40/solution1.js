/**
 * 
 * https://leetcode.com/problems/combination-sum-ii/
 * 
 * 40. Combination Sum II
 * 
 * Medium
 * 
 * DFS + HashMap 但是注意每个元素只能用一次
 */
const combinationSum2 = (candidates, target) => {
  const ans = []
  const cache = new Map()

  const dfs = (currentIndex, currentArray, sum) => {
    if (sum === 0) {
      const a = currentArray.slice()
      const key = a.sort().join()
      if (!cache.get(key)) {
        ans.push(a)
        cache.set(key, true)
      }
      return
    }
    if (sum < 0) {
      return
    }

    let currentItem = null
    for (let i = currentIndex; i < candidates.length; i++) {
      const item = candidates[i]
      currentArray.push(item)
      dfs(i + 1, currentArray, sum - item)
      currentArray.pop()
    }
  }

  dfs(0, [], target)
  return ans
}