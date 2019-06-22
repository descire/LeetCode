/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * 28. 实现strStr()
 * 
 * Easy
 * 
 * 暴力求解
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

function isValid(str1, str2, start) {

  for (let i = start, max = start + str2.length; i < max; i++) {
    if (str1[i] !== str2[i - start]) {
      return false
    }
  }

  return true
}