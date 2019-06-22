/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 
 * 125. 验证回文串
 * 
 * Easy
 * 
 * 96.73%
 * 44.65%
 */

const reg = /[0-9a-z]/

const isPalindrome = s => {
  const max = s.length

  let start = 0
  let end = max - 1

  while (start < end) {
    const pre = s[start].toLowerCase()
    const suf = s[end].toLowerCase()

    if (!reg.test(pre)) {
      start++
      continue
    }

    if (!reg.test(suf)) {
      end--
      continue
    }

    if (pre !== suf) {
      return false
    }

    start++
    end--
  }

  return true
}