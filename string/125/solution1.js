/**
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * 125. Valid Palindrome
 * 
 * Easy
 */
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