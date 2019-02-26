# [494. Target Sum](https://leetcode.com/problems/target-sum/)

### 一、解题思路

  &emsp;&emsp;最简单的方法就是列举所有的方式，记录其中满足目标值的次数，也就是采用DFS（深度优先搜索）实现：

```JavaScript
const findTargetSumWays = (nums, S) => {
  let ans = 0
  let max = nums.length - 1
  dfs(0, S)
  return ans
  function dfs (startIndex, S) {
    if (startIndex === max) {
      if (S - nums[startIndex] === 0) {
        ans++
      }
      if (S + nums[startIndex] === 0) {
        ans++
      }
      return
    }
    dfs(startIndex + 1, S - nums[startIndex])
    dfs(startIndex + 1, S + nums[startIndex])
  }
}
```

  &emsp;&emsp;显然每个元素有执行两种操作的可能，所以时间复杂度为O（2^n），随着n的增大，该算法执行的时间是非常可怕的。

  &emsp;&emsp;再仔细观察该问题：

```s
  ±a1 ± a2 ± a3 ± a4 ± a5 ... ∈ [-sum, +sum]
```

  &emsp;&emsp;由上述表达式可以得出，给定任意数组所产生的和值应该介于-sum和+sum之间，那么就可以采用动态规划的方式统计各种和值出现的次数：

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示前i个元素形成和值为j的次数。
```

  &emsp;&emsp;边界状态：

```s
  dp[0][0] = 1
```

  &emsp;&emsp;那么它的状态转移方程则为：
    
```s
  dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j + nums[i - 1]]
```

  &emsp;&emsp;可能你已经发现j可能为负值，而对于数组来说是不存在负数下标的，所以这里需要对于数组的下标进行偏移。

  &emsp;&emsp;那么该问题的时间复杂度则降低为O(n * 2 * sum)，具体代码如下：

### 二、代码实现

```JavaScript
const findTargetSumWays = (nums, S) => {
  const max = nums.length

  const sum = nums.reduce((x, y) => x + y)

  // 特殊情况
  if (S > sum) {
    return 0
  }

  const dp = []
  dp[0] = new Array(sum * 2 + 1).fill(0) // 纯属为了打印出来好看^_^
  dp[0][sum] = 1

  for (let i = 1; i <= max; i++) {
    dp[i] = []
    for (let j = -sum; j <= sum; j++) {
      dp[i][j + sum] = (dp[i - 1][j - nums[i - 1] + sum] || 0) + (dp[i - 1][j + nums[i - 1] + sum] || 0)
    }
  }
  return dp[max][S + sum]
}
```