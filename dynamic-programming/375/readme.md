# [375. Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)

### 一、解题思路
  
  &emsp;&emsp;这道题目还是非常有趣的，给定一个从1到n的数组，每次可以猜一个数字，当数字不正确时需要付出该数字值的代价，并且告诉我们目标数字比该数字大还是小，让我们求出能够猜出目标值至少需要花费多少代价。

  &emsp;&emsp;参与猜测的选手是一个比较聪明的人，不会故意的选择代价的步骤。（这一点很重要）下面是这种情况的分析：

  - 数组只有一个元素时，那么不需要花费任何代价就可以猜出数字。（因为只有一个数字肯定就是它）。

  - 数组中只有两个元素时，猜测两次肯定能得到结果，所以第一次会猜最小值的那个元素，那么至少花费最小元素值的代价。

  - 数组中有三个元素时，那么只需要猜测中间的元素，就可以知道最终的结果了，花费的代价就是中间元素的大小。

  - 数组中的元素大于3个时，就需要不断尝试第一次选择的元素，剩下的问题实际上就是前面3种情况一致。

  &emsp;&emsp;那么这道题目就可以采用动态规划的方式解决，定义状态：

```s
  dp[i][j]从i到j序列中猜出正确数字至少花费多少代价。
```

  &emsp;&emsp;状态转移公式：

```s
  if i === j
    dp[i][j] = 0
  if j - 1 === i
    dp[i][j] = i + 1
  if j - 2 === i
    dp[i][j] = (i + j + 2) >> 1
  else
    dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][k - 1], dp[k + 1][j]) + k + 1)
```

### 二、代码实现

```JavaScript
const getMoneyAmount = n => {
  const dp = new Array(n + 1)

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < n; j++) {
      if (i === j) {
        dp[i][j] = 0
      } else if (j - 1 === i) {
        dp[i][j] = i + 1
      } else if (j - 2 === i) {
        dp[i][j] = (i + j + 2) >> 1
      } else {
        // 以每个数字为中间点
        dp[i][j] = Number.MAX_SAFE_INTEGER
        for (let k = i + 1; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][k - 1], dp[k + 1][j]) + k + 1)
        }
      }
    }
  }
  return dp[0][n - 1]
}
```