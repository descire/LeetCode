# [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

### 一、解题思路

  &emsp;&emsp;判断给定数组能否被拆成两个和相等的集合，首先可以通过该数组的和是否能被2整除，来排除一部分情况。

  &emsp;&emsp;接下来最简单的思路就是通过DFS搜索算法找出该数组中是否存在和值为sum/2的集合：

```JavaScript
const canPartition = nums => {
  const sum = nums.reduce((x, y) => x + y, 0)

  if (sum % 2 !== 0) {
    return false
  }
  nums.sort((a, b) => a - b)
  const subSum = sum / 2

  let ans = false
  dfs(0, 0)
  return ans
  function dfs (startIndex, sum) {
    if (sum === subSum) {
      ans = true
      return
    }
    if (sum > subSum) {
      return
    }

    for (let i = startIndex; i < nums.length; i++) {
      dfs(i + 1, sum + nums[i])
    }
  }
}
```

  &emsp;&emsp;时间复杂度为O(n^2), 但是该方法通过不了测试用例。

  &emsp;&emsp;换一种思路思考该问题，实际对于数组中任何一个元素有两种操作：选择或者不选择。最终需要达到和值为sum/2的目标，可见这是一个0/1背包的问题，定义状态：

```s
  dp[i][j] 表示组成和值j在前i个元素中是否存在
```

  &emsp;&emsp;边界状态：

```s
  dp[0][0] = true
  dp[0][j] = false j >= 1
  dp[i][0] = true
```

  &emsp;&emsp;状态转移方程：

```s
  dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
```

### 二、 代码实现

```JavaScript
const canPartition = nums => {
  const sum = nums.reduce((x, y) => x + y, 0)

  if (sum % 2 !== 0) {
    return false
  }

  const subSum = sum / 2
  const max = nums.length

  const dp = new Array(max + 1)

  for (let i = 0; i <= max; i++) {
    dp[i] = [true]
  }
  for (let i = 1; i <= subSum; i++) {
    dp[0][i] = false
  }

  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= subSum; j++) {
      dp[i][j] = dp[i - 1][j]
      const item = nums[i - 1]
      if (j >= item) {
        dp[i][j] = (dp[i][j] || dp[i - 1][j - item])
      }
    }
  }

  return dp[max][subSum]
}
```