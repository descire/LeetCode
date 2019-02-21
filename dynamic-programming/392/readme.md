# [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)

### 一、解题思路

  &emsp;&emsp;本题要求判断字符串s是否为字符串t的子序列，很简单的思路：起始下标和终止下标向中间扫描。

```JavaScript
const isSubsequence = (s, t) => {
  if (s.length === 0) {
    return true
  }
  const l1 = s.length - 1
  const l2 = t.length - 1

  let s1 = 0
  let e1 = l1

  let s2 = 0
  let e2 = l2

  while (s1 <= e1 && s2 <= e2) {
    const pre1 = s[s1]
    const next1 = s[e1]

    const pre2 = t[s2]
    const next2 = t[e2]

    if (pre2 === pre1) {
      s2++
      s1++
    } else {
      s2++
    }
    if (next2 === next1) {
      e1--
      e2--
    } else {
      e2--
    }

    if (s1 > e1) {
      return true
    }
  }

  return false
}
```

  &emsp;&emsp;除了上述解法之外，还可以利用递归思想解决该问题，例如s="abc"和t="ahbgdc"的问题可以转化为s="bc"和t="hbgdc"的问题，还是再转化为s="c"和t="gdc"的问题，下面给出尾递归的写法：

### 二、代码实现

```JavaScript
const isSubsequence = (s, t) => {
  const max = s.length
  return isSub(0, 0)
  function isSub (sIndex, startIndex) {
    if (sIndex === max) {
      return true
    }

    const index = t.indexOf(s[sIndex], startIndex)
    if (index < 0) {
      return false
    }

    return isSub(sIndex + 1, index + 1)
  }
}
```