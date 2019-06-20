/**
 * https://leetcode.com/problems/reverse-string/
 * 
 * 344. Reverse String
 * 
 * Easy
 * 
 * 104ms 98.36%
 * 46.7mb 79.72%
 */
const reverseString = s => {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    const item = s[start]
    s[start] = s[end]
    s[end] = item
    start++
    end--
  }
  return s
}