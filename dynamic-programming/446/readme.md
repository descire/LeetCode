# [446. Arithmetic Slices II - Subsequence](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/)

### 一、解题思路

  &emsp;&emsp;相比较[413. Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/)，这道题的难度在于求解的是序列，也就是意味着不一定是连续的。

  &emsp;&emsp;最容易想到的方法就是通过枚举所有的可能性，那么就需要二维去存储等差序列的前两个数字，并且还需要一维去存储差值，那么整个算法的时间复杂度就为O(n^3)，对于一道难度为Hard的题目，是不可能通过的。

  &emsp;&emsp;现在就需要进行降维处理，这里可以通过hashtable将二维数组降维：

```s
  dp[i][k] 表示以第i个元素结尾所形成差值为k的序列的长度。
```

  &emsp;&emsp;接下来看一个例子的推导过程：

```s
  [1, 1, 1, 1]

  当 i = 0
  此时没有形成差值 dp[0][0] = {}

  当 i = 1
  可以与前面 i = 0 形成差值为0的序列 dp[1][0] = {0: 1}

  当 i = 2
  可以与前面的 i = 0 形成差值为0的序列，并且 dp[2][0] = {0: 1}

  可以与前面的 i = 1 形成差值为1的序列，并且 i = 1 已经与 i = 0 形成差值为0的序列，
  那么此时能够产生1个等差序列，并记录 dp[2][0] = {0: 3}

  当 i = 3
  可以与前面的 i = 0 形成差值为0的序列，并且 dp[2][0] = {0: 1}

  可以与前面的 i = 1 形成差值为1的序列，并且 i = 1 已经与 i = 0 形成差值为0的序列，
  那么此时能够产生1个等差序列，并记录 dp[3][0] = {0: 3}

  可以与前面的 i = 2 形成差值为1的序列，并且 i = 1 已经与 i = 0 形成差值为0的序列，
  那么此时能够产生3个等差序列，并记录 dp[3][0] = {0: 7}
```

  &emsp;&emsp;具体代码实现如下：

### 二、代码实现


```JavaScript
const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  let ans = 0
  const dp = new Array(max).fill(0).map(() => new Map())
  for (let i = 1; i < max; i++) {
    const item = A[i]
    for (let j = 0; j < i; j++) {
      const pre = A[j]
      const diff = item - pre
      dp[i].set(diff, (dp[i].get(diff) || 0) + 1)
      if (dp[j].get(diff)) {
        dp[i].set(diff, dp[i].get(diff) + dp[j].get(diff))
        ans += dp[j].get(diff)
      }
    }  
  }
  return ans
}

```