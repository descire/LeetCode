# [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

### 一、解题思路

  &emsp;&emsp;这道题除了限定数组的元素以及组成序列所需元素的个数条件之外，本质上与[40. Combination Sum II](../40/solution2.js)的解法一致：

### 二、代码实现

```JavaScript
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
```