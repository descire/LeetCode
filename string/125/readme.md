# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

### 一、解题思路

  &emsp;&emsp;使用双指针扫描字符串，注意过滤掉非字母和数字字符。

### 二、代码实现

```JavaScript
const reg = /[0-9a-zA-Z]/
const isPalindrome = s => {
  const max = s.length
  if (max <= 1) {
    return true
  }

  for (let i = 0, j = max - 1; i <= j;) {
    const pre = s[i].toLowerCase()
    const sub = s[j].toLowerCase()
    if (!reg.test(pre)) {
      i++
      continue
    }
    if (!reg.test(sub)) {
      j--
      continue
    }
    if (pre !== sub) {
      return false
    }
    i++
    j--
  }

  return true
}
```