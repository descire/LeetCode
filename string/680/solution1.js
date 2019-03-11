/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 * 
 * 680. Valid Palindrome II
 * 
 * Easy
 */
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