# [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

### 一、解题思路

  &emsp;&emsp;首先对于如何判断回复字符串，这里不再赘述。（可以翻阅之前的题目）

  &emsp;&emsp;以'aab'为例，分析的过程如果：

  - 将该字符分割为'a'和'ab'，'a'是回文字符串，那么就需要再在'ab'找分割点。（是不是发现这里实际上是相同的子问题）将'ab'，拆成'a'和'b'，两个字符串都满足回文字符串，那么第一分割的结果为['a','a','b']。
  - 将该字符串分割为'aa'和'b'，两者都为回文字符串，所以第二次分割结果为['aa', 'b']
  - 将该字符串分割为'aab'，不为回文字符串。

  &emsp;&emsp;从上述推导过程实际上就是一个深度优先搜索的过程。

### 二、代码实现

```JavaScript
const partition = s => {
  const max = s.length
  const ans = []
  const path = []

  dfs(s, 0, path, ans)
  return ans
  function dfs (s, pos, path, ans) {
    if (pos === max) {
      ans.push([...path])
      return
    }
    for (let i = pos; i < max; i++) {
      if (isPalindrome(s, pos, i)) {
        path.push(s.substring(pos, i + 1))
        dfs(s, i + 1, path, ans)
        path.pop()
      }
    }
  }
}

function isPalindrome (s, i, j) {
  for (let start = i, end = j; start <= end;) {
    if (s[start] === s[end]) {
      start++
      end--
      continue
    }
    return false
  }
  return true
}
```