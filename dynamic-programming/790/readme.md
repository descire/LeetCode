# [790. Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目。

  &emsp;&emsp;首先总结一下最终可以通过补上哪些形状形成完整的图案：

```s
  第一种
    o
    o

  第二种
    oo
    xx

  第三种
    xx
     x
  
  第四种

     x
    xx
```

  &emsp;&emsp;由上述四种情况，可以总结前一个状态有三种情况：完整图案、第一行多一个格子和第二行多一个格子。那么可以定义状态:

```s
  dp[i][0]第i列完整图案的数量
  dp[i][1]第i列第一行多一个的图案数量
  dp[i][2]第i列第二行多一个的图案数量
```

  &emsp;&emsp;那么dp[i][0]的状态转移方程为：

```s
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]
```

  &emsp;&emsp;对于dp[i][1]和dp[i][2]，大家可以自己列举一下组成的情况，这里不再赘述:

```s
  dp[i][1] = dp[i - 2][0] + dp[i - 1][2]
  dp[i][2] = dp[i - 2][0] + dp[i - 1][1]
```

### 二、代码实现

```JavaScript
const kMod = 10 ** 9 + 7
const numTilings = N => {
  const dp = []
  dp[0] = [1, 0, 0]
  dp[1] = [1, 0, 0]

  for (let i = 2; i <= N; i++) {
    dp[i] = []

    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % kMod
    dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % kMod
    dp[i][2] = (dp[i - 2][0] + dp[i - 1][1]) % kMod
  }

  return dp[N][0]
}
```