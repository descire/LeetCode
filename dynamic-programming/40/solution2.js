/**
 * 
 * https://leetcode.com/problems/combination-sum-ii/
 * 
 * 40. Combination Sum II
 * 
 * Medium
 * 
 * DFS
 */
const combinationSum2 = (candidates, target) => {
  const ans = []
  candidates.sort((a, b) => a - b)

  const dfs = (currentIndex, currentArray, sum) => {
    if (sum === 0) {
      ans.push(currentArray.slice())
      return
    }
    if (sum < 0) {
      return
    }

    let sameItem = null
    for (let i = currentIndex; i < candidates.length; i++) {
      const item = candidates[i]
      if (i !== currentIndex && sameItem === item) {
        continue
      }
      currentArray.push(item)
      dfs(i + 1, currentArray, sum - item)
      currentArray.pop()
      sameItem = item
    }
  }

  dfs(0, [], target)
  return ans
}