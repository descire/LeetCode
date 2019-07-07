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
    // 根据部分匹配表将 needle 与当前匹配的位置对齐
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
      // 回退
      let len = 0
      let tempEnd = end
      while (start >= 0) {
        if (str[start] !== str[tempEnd]) {
          len = 0
          tempEnd = end
        } else {
          len++
          tempEnd--
        }
        start--
      }
      partial[end++] = len
      start += len + 1
    }
  }

  return partial
}


console.log(getPartial('abcabbd')) // 0001200
console.log(getPartial('aabaaa')) // 010122
console.log(strStr('abcabbcabbd', 'abcabbd'))