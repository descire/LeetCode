# [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

#### 一、解题思路

  &emsp;&emsp;这道题目还是采用双指征扫描字符串的方法判断是否构成回文字符串，但是有一次纠错的机会，那么只要在不满足回文字符串的两个字符处，分别扫描删除任意一个字符串的剩余字符串是否能够构成回文字符串即可。

### 二、代码实现

```JavaScript
const validPalindrome = s => {
  const max = s.length
  if (max <= 1) {
    return true
  }

  let isDelete = false
  for (let i = 0, j = max - 1; i <= j;) {
    const pre = s[i]
    const suf = s[j]

    if (pre == suf) {
      i++
      j--
      continue
    }

    return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
  }
  return true
}

function isPalindrome (s, start, end) {
  for (let i = start, j = end; i <= j;) {
    if (s[i] === s[j]) {
      i++
      j--
      continue
    }
    return false
  }
  return true
}
```