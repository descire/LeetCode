# [486. Predict the Winner](https://leetcode.com/problems/predict-the-winner/)

### 一、解题思路

  &emsp;&emsp;这道题中两位选手都希望自己能够拿到更多的分数，而游戏规则本身就是一个递归的过程，也就是在每一次选择中，选手都希望自己的分数比对方高。

  &emsp;&emsp;那么对于上述问题，只需要采用DFS搜索所有可能性，并且【最大化】自己和【最小化】对手获取下一步动作，这一类问题归属于极大极小算法问题。

```JavaScript
const PredictTheWinner = nums => {
  const max = nums.length

  return help(0, max - 1) >= 0

  function help (start, end) {
    if (start === end) {
      return nums[start]
    }

    return Math.max(nums[start] - help(start + 1, end), nums[end] - help(start, end - 1))
  }
}
```

  &emsp;&emsp;上述实现代码中枚举了所有可能的结果，其时间复杂度为O(2^n)，而这个过程存在很多重复的子问题，借助剪枝算法思想，减少DFS过程不必要的分支，可以将时间复杂度优化为O(n^2)，最终实现代码如下：

### 二、代码实现

```JavaScript
const PredictTheWinner = nums => {
  const max = nums.length
  const cache = {}
  return help(0, max - 1) >= 0

  function help (start, end) {
    const index = start * max + end
    if (start === end) {
      cache[index] = nums[start]
      return cache[index]
    }

    if (cache[index] === undefined) {
      cache[index] = Math.max(nums[start] - help(start + 1, end), nums[end] - help(start, end - 1))
    }

    return cache[index]
  }
}
```