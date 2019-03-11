# [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)

### 一、解题思路

  &emsp;&emsp;处理这道题目的思路非常的简单，通过Hashmap统计字母的个数，对于任意偶数字符放进字符串都能组成回文字符串，如果给定字符中含有奇数个数的字符，那么最终结果还需要+1，因为它可以放在字符串中间形成回文字符串。

### 二、代码实现

```JavaScript
const longestPalindrome = s => {
  const words = new Map()
  const max = s.length
  let ans = 0
  if (max === 0) {
    return ans
  }
  for (let i = 0; i < s.length; i++) {
    const w = s[i]
    if (!words.get(w)) {
      words.set(w, 0)
    }
    words.set(w, words.get(w) + 1)
  }
  let isOdd = false
  for (let [key, value] of words) {
    if (value % 2 === 0) {
      ans += value
    } else {
      isOdd = true
      ans += (value - 1)
    }
  }
  
  return isOdd ? ans + 1 : ans
}
```