/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * 28. 实现strStr()
 * 
 * Easy
 * 
 * 暴力求解
 * 
 * 88ms 68.90%
 * 
 * 35.3mb 17.83%
 * 
 * O(m*n)
 */
const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0
  }
  
  for (let i = 0, max = haystack.length; i < max; i++) {
    if (isValid(haystack, needle, i)) {
      return i
    }
  }
  return -1
}

function isValid(haystack, needle, index) {
  const max = needle.length - 1
  let start = index
  let end = start + max
  while (start <= end) {
    if (needle[start - index] !== haystack[start]) {
      return false
    }
    if (needle[end - index] !== haystack[end]) {
      return false
    }
    start++
    end--
  }
  return true
}