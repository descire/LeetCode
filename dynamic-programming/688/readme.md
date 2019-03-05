# [688. Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)

### 一、解题思路

  &emsp;&emsp;这道题目最简单的思路就是采用DFS搜索算法统计最终落在棋盘中的方法数：

```JavaScript
const knightProbability = (N, K, r, c) => {
  let valid = 0

  dfs(r, c, 0)

  return valid / Math.pow(8, K)

  function dfs (x, y, step) {
    if (x < 0 || x > N - 1 || y < 0 || y > N - 1) {
      return
    }
    if (step === K) {
      valid++
      return
    }

    dfs(x - 2, y - 1, step + 1)
    dfs(x - 2, y + 1, step + 1)
    dfs(x - 1, y + 2, step + 1)
    dfs(x - 1, y - 2, step + 1)
    dfs(x + 1, y - 2, step + 1)
    dfs(x + 1, y + 2, step + 1)
    dfs(x + 2, y - 1, step + 1)
    dfs(x + 2, y + 1, step + 1)
  }
}
```

  &emsp;&emsp;代码虽然简单，但是时间复杂度突破天际O(8^k)。

  &emsp;&emsp;其实对于棋子每一轮的行走都会产生一个状态，这个状态为：

```s
  dp[k][i][j]第k步到达第i行第j列的方法数。
```

  &emsp;&emsp;以（N = 3， K = 2, r = 0, c = 0）为例，初始状态为：

```s
  -------------
  - 1 - 0 - 0 -
  -------------
  - 0 - 0 - 0 -
  -------------
  - 0 - 0 - 0 -
  -------------
```

  &emsp;&emsp;当棋子第一次运动时，只能落在(1, 2)和(2, 1)处为有效，所以状态更新为：

```s
  -------------
  - 0 - 0 - 0 -
  -------------
  - 0 - 0 - 1 -
  -------------
  - 0 - 1 - 0 -
  -------------
```

  &emsp;&emsp;当棋子第二次运动时：

  - 从(1, 2)出发，可以落在(0, 0)和(2, 0)
  - 从(2, 1)出发，可以落在(0, 0)和(0, 2)

```s
  -------------
  - 2 - 0 - 1 -
  -------------
  - 0 - 0 - 0 -
  -------------
  - 1 - 0 - 0 -
  -------------
```

  &emsp;&emsp;根据上述演算可以发现，dp[k + 1][i][j]由八个方向的dp[k][row][col]推导得到。
  
  &emsp;&emsp;由于当前状态只与前一个状态息息相关，那么可以通过滚动数组的方式，将空间复杂度降低为O(n^2)。

  &emsp;&emsp;当推导出最有一步的状态后，需要统计状态中所有合法格子的方法总数，即可求得本题的答案。

### 二、代码实现

```JavaScript
const knightProbability = (N, K, r, c) => {

  const moves = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]

  let preDP, nextDP

  preDP = new Array(N).fill(0).map(item => new Array(N).fill(0))

  preDP[r][c] = 1

  for (let k = 0; k < K; k++) {
    nextDP = new Array(N).fill(0).map(item => new Array(N).fill(0))
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (let [xOffset, yOffset] of moves) {
          const row = i + xOffset
          const col = j + yOffset
          if (row >= 0 && row < N && col >= 0 && col < N) {
            nextDP[row][col] += preDP[i][j]
          }
        }
      }
    }
    preDP = nextDP
  }

  let sum = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sum += preDP[i][j]
    }
  }

  return sum / Math.pow(8, K)
}
```