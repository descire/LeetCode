/**
 * https://leetcode.com/problems/longest-palindrome/
 * 
 * 409. Longest Palindrome
 * 
 * Easy
 */
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