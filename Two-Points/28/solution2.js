/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * 28. 实现strStr()
 * 
 * Easy
 * 
 * KMP
 * 
 * http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
 * 
 * 
 * O(m+n)
 * 
 * 88.51%
 * 7.95%
 */
const strStr = (haystack, needle) => {
  const partial = getPartial(needle)
  const l1 = haystack.length
  const l2 = needle.length

  let x = 0
  let y = 0
  while (x < l1 && y < l2) {
    if (y === 0 && haystack[x] !== needle[y]) {
      x++
      continue
    }
    if (haystack[x] === needle[y]) {
      x++
      y++
      continue
    }
    y = partial[y - 1]
  }
  if (y === l2) {
    return x - l2
  }
  return -1
}

// 部分匹配值
function getPartial(str) {
  const max = str.length
  const partial = Array(max).fill(0)

  let start = 0
  let end = 1
  while (end < max) {

    if (start === 0 && str[start] !== str[end]) {
      partial[end] = 0
      end++
      continue
    }

    if (str[start] === str[end]) {
      partial[end] = start + 1
      start++
      end++
      continue
    }
    if (str[start] !== str[end]) {
      start--
    }
  }

  return partial
}
