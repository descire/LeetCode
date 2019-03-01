# [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)

### 一、解题思路

  &emsp;&emsp;对于这类题目，大家最容易想到的就是通过DFS枚举所有的可能性，从而得到结果：

```JavaScript
const combinationSum4 = (nums, target) => {
  let ans = 0
  dfs(nums, 0)

  return ans

  function dfs (nums, sum) {
    if (sum === target) {
      ans++
      return
    }
    if (sum > target) {
      return
    }

    for (let i = 0; i < nums.length; i++) {
      dfs(nums, sum + nums[i])
    }
  }
}
```

  &emsp;&emsp;但是对于这道题目来说，它的时间复杂度非常的大，至少为：

```s
  n 表示数组的长度
  target 为目标值
  min 为数组中最少的元素
  O(n ^ (target / min))
```

  &emsp;&emsp;所以采用DFS的方式，必然不会通过测试用例。

  &emsp;&emsp;对于这种只统计数量，不要求具体方案的问题，通常都可以采用动态规划的方式解决。

  &emsp;&emsp;定义状态：

```s
  dp[i]表示构成值为i的组合的个数。
```

  &emsp;&emsp;当i = 0时，dp[0] = 1，这是定义状态的边界情况。

  &emsp;&emsp;状态转移方程：

```s
  nums[j] <= i 并且 j ∈ [0, max)
  dp[i] += dp[i - nums[j]]
```

### 二、代码实现

```JavaScript
const combinationSum4 = (nums, target) => {
  const max = nums.length

  const dp = new Array(target + 1).fill(0)

  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < max; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
}
```