# [39. Combination Sum](https://leetcode.com/problems/combination-sum/)

### 一、解题思路

  &emsp;&emsp;本题要求列出所有组成目标值的具体方案，那么就很容易想到DFS搜索所有方案，并且通过HashMap去重解决问题：

```JavaScript
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
```

  &emsp;&emsp;从上述DFS搜索的过程中，可以发现当搜索到i元素时，会重新从0开始寻找能够满足目标值的组成，从而造成重复搜索的情况，那么可以通过记录访问的下标优化时间复杂度。

### 二、代码实现

```JavaScript
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
```