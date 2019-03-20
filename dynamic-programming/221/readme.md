# [221. Maximal Square](https://leetcode.com/problems/maximal-square/)

### 一、解题思路

  &emsp;&emsp;从题目求解的答案就可以知道本题可以采用动态规划的思路去解决。

  &emsp;&emsp;首先定义状态为：

```s
  dp[i][j]表示第i行j列所能形成的正方形的边长。
```

  &emsp;&emsp;那么如何求解当前点所能形成的正方形的边长呢？主要有这两种情况：

  - 当前节点值为“0”时，正方形边长为0；
  - 当前节点的值为“1”时，那么需要判断左上角，左边以及上边节点值是否都为“1”，如果都为“1”，那么当前节点可以作为完整正方形的一部分，如果有一个为“0”，则只能形成自身边长为1的正方形。

  &emsp;&emsp;状态转移方程为：

```s
  dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
```

  &emsp;&esmp;根据上述状态转移方程，可以通过滚动数组将时间复杂度降低到O(n)：

### 二、代码实现

```JavaScript
const maximalSquare = matrix => {
  const row = matrix.length
  if (!row) {
    return 0
  }
  const col = matrix[0].length
  let ans = 0

  let dp = new Array(col + 1).fill(0)
  const temp = new Array(col + 1)

  for (let i = 1; i <= row; i++) {
    temp.fill(0)
    for (let j = 1; j <= col; j++) {
      if (matrix[i - 1][j - 1] == '1') {
        temp[j] = Math.min(temp[j - 1], dp[j], dp[j - 1]) + 1
        ans = Math.max(ans, temp[j])
      }
    }
    dp = temp.map(item => item)
  }

  return ans * ans
}
```