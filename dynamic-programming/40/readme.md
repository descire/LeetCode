# [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

### 一、解题思路

  &emsp;&emsp;这道题目与[39. Combination Sum](../39/solution2.js)基本类似，唯一的区别在于数组中的元素只能用一次，也就是每一个元素在DFS搜索的过程中不能被反复的使用，那么修改一下DFS搜索的数组下标即可：

```JavaScript
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
```

  &emsp;&emsp;由于数组中的元素并不是唯一的，那么就可能出现重复的情况，上述代码中通过HashMap去重。

  &emsp;&emsp;还有另一种方法也可以解决重复元素造成的重复序列问题，先通过对数组排序，那么获取到的序列也是一个有序序列，那么保证不重复的条件就是对于每一个序列其实元素不应该相同，修改代码如下：

### 二、代码实现

```JavaScript
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
```