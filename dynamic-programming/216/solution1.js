/**
 * https://leetcode.com/problems/combination-sum-iii/
 * 
 * 216. Combination Sum III
 * 
 * Medium
 */
const combinationSum3 = (k, n) => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const ans = []

  const dfs = (currentIndex, currentArray, amount, sum) => {
    if (sum === 0 && amount === k) {
      ans.push(currentArray.slice())
      return
    }
    if (sum < 0 || amount > k) {
      return
    }

    for (let i = currentIndex; i < 9; i++) {
      const item = candidates[i]
      currentArray.push(item)
      dfs(i + 1, currentArray, amount + 1, sum - item)
      currentArray.pop()
    }
  }

  dfs(0, [], 0, n)
  return ans
}