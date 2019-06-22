/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * 28. 实现strStr()
 * 
 * Easy
 * 
 * KMP
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
    // 已经匹配的字符数长度 - 部分匹配的最大公共字串的长度
    x = x - partial[y - 1]
    y = 0
  }
  if (y === l2) {
    return x - l2
  }
  return -1
}

// 部分匹配值
// 根据前缀和后缀 算出最大的公共部分
function getPartial(str) {
  const max = str.length
  const partial = Array(max).fill(0)

  let i = 0
  let j = 1
  while (j < max) {

    if (i === 0 && str[i] !== str[j]) {
      partial[j] = 0
      j++
      continue
    }

    if (str[i] === str[j]) {
      partial[j] = i + 1
      i++
      j++
      continue
    }
    if (str[i] !== str[j]) {
      i--
    }
  }

  return partial
}
