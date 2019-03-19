# [139. Word Break](https://leetcode.com/problems/word-break/)

### 一、解题思路

  &emsp;&emsp;第一种方法采用递归的思想，对于求解'aaa'能否分割成wordDist中的单词，那么问题实际上可以转化为：

```s
  wordBreak('aaa') = (wordBreak('') && wordBreak('aaa')) || (wordBreak('a') && wordBreak('aa')) || (wordBreak('aa') && wordBreak('a') || (wordBreak('aaa') && wordBreak(''))
```

  &emsp;&emsp;实际上就是解决相同的类型的子问题，从上述示例中，也会发现其中存在大量的重复子问题，需要对递归就行剪枝算法优化：

```JavaScript
const wordBreak = (s, wordDist) => {
  const max = wordDist.length
  const cache = new Map()
  for (let i = 0; i < max; i++) {
    cache.set(wordDist[i], true)
  }

  return dfs(s)

  function dfs (s) {
    const cacheResult = cache.get(s)
    if ( cacheResult !== undefined) {
      return cacheResult
    }
    for (let i = 0, len = s.length; i < len && len !== 1; i++) {
      const left = s.substring(0, i)
      const right = s.substring(i)
      if (dfs(left) && dfs(right)) {
        cache.set(s, true)
        return true
      }
    }

    cache.set(s, false)
    return false
  }
}
```

  &emsp;&emsp;第二种方法采用动态规划的思想，定义状态：

```s
  dp[i]表示前i个字符是否能够分割成字典里面的元素。
```

  &emsp;&emsp;同样对于任意dp[i]，都需要尝试前面任意一个分割点是否满足要求，状态转移方程见下列实现代码：（注意字符串与状态存储之间的下标关系）

### 二、代码实现

```JavaScript
const wordBreak = (s, wordDist) => {
  const wmax = wordDist.length
  if (!wmax) {
    return false
  }
  const m = new Map()
  for (let i = 0; i < wmax; i++) {
    m.set(wordDist[i], true)
  }
  m.set('', true)

  const dp = [true]
  const max = s.length
  for (let i = 1; i <= max; i++) {
    if (i === 1) {
      dp[i] = !!m.get(s[i - 1])
      continue
    }
    dp[i] = false
    for (let j = 1; j <= i; j++) {
      const next = s.substring(j - 1, i)
      if (dp[j - 1] && m.get(next)) {
        dp[i] = true
        break
      }
    }
  }
  return dp[max]
}
```