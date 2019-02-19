# [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)

### 一、解题思路

  &emsp;&emsp;定义状态：

```s
  dp[i]表示第days[i]天所花费的最少票价
```

  &emsp;&emsp;边界状态:

```s
  dp[0] = 0
``` 

  &emsp;&emsp;以下述条件为例：

```s
  days = [1,4,6,7,8,20]
  costs = [2,7,15]
```

  &emsp;&emsp;在寻找状态转移方程之前，首先要明白当前状态是由该状态之前的状态推导出来的，上述示例推导的过程为：

```s
  # 第1天
  cost[0] + dp[0] = 2

  dp[1] = 2

  # 第二天
  cost[0] + dp[1] = 4
  cost[1] + dp[0] = 7

  dp[2] = 4

  # 第三天
  cost[0] + dp[2] = 6
  cost[1] + dp[1] = 9
  cost[1] + dp[0] = 7

  dp[3] = 6

  # 第4天
  cost[0] + dp[3] = 8
  cost[1] + dp[2] = 11
  cost[1] + dp[1] = 9
  cost[1] + dp[0] = 7

  dp[4] = 7

  # 第5天
  cost[0] + dp[4] = 9
  cost[1] + dp[3] = 13
  cost[1] + dp[2] = 11
  cost[1] + dp[1] = 9
  cost[1] + dp[0] = 15

  dp[5] = 9

  # 第6天
  cost[0] + dp[5] = 11
  cost[2] + dp[4] = 22
  ....

  dp[6] = 11
```

  &emsp;&emsp;综上所述，大家基本可以看出转移转移公式了（数学公式太难敲，看代码吧ε=ε=ε=┏(゜ロ゜;)┛）：

### 二、代码实现

```JavaScript
const mincostTickets = (days, costs) => {
  const max = days.length
  if (!max) {
    return 0
  }

  const dp = [0]
  for (let i = 1; i <= max; i++) {
    dp[i] = costs[0] + dp[i - 1]
    let dis = 0
    for (let j = i - 1; j >= 1; j--) {
      dis = days[i - 1] - days[j - 1]
      if (dis <= 6) {
        dp[i] = Math.min(dp[j - 1] + costs[1], dp[i])
      } else if (dis <= 29) {
        dp[i] = Math.min(dp[j - 1] + costs[2], dp[i])
      }
    }
  }
  return dp[max]
}
```