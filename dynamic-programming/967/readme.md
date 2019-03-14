# [967. Numbers With Same Consecutive Differences](https://leetcode.com/problems/numbers-with-same-consecutive-differences/)

### 一、解题思路

  &emsp;&emsp;这种求解具体方案的基本上都是采用搜索算法实现。

  &emsp;&emsp;这道题目可以采用DFS搜索算法解决，需要注意在搜索的过程中，需要搜素当前数字左右两边相差K的数字，并且当K=0时，注意重复的问题。

### 二、代码实现

```JavaScript
const numsSameConsecDiff = (N, K) => {
  const ans = []
  const temp = []
  if (N === 1) {
    ans.push(0)
  }

  for (let i = 1; i <= 9; i++) {
    temp.push(i)
    dfs(N - 1, i)
    temp.pop()
  }

  return ans

  function dfs (N, cur) {
    if (N === 0) {
      ans.push(temp.join(''))
      return
    }

    if (cur + K <= 9) {
      temp.push(cur + K)
      dfs(N - 1, cur + K)
      temp.pop()
    }
    if (cur - K >= 0 && K !== 0) {  // K等于0时重复情况
      temp.push(cur - K)
      dfs(N - 1, cur - K)
      temp.pop()
    }
  }
}
```