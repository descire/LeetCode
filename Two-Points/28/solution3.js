/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 
 * 28. 实现strStr()
 * 
 * Easy
 * 
 * Boyer Moore
 * 
 * 后移 = 坏字符的位置 - 该字符在pattern出现的位置
 * 
 * 95.96%
 * 35.78%
 */
const strStr = (haystack, needle) => {

  let indexs = new Map()
  for (let i = 0, max = needle.length; i < max; i++) {
    const str = needle[i]
    if (indexs.has(str)) {
      indexs.set(str, i)
    }
  }

  const l1 = haystack.length
  const l2 = needle.length

  let x = l2 - 1
  let y = l2 - 1

  while (x < l1 && y >= 0) {
    const xSuf = haystack[x]
    const ySuf = needle[y]
    if (xSuf !== ySuf) {
      x += l2 - 1 - needle.lastIndexOf(xSuf, y)
      y = l2 - 1
    } else {
      x--
      y--
    }
  }

  if (y === -1) {
    return x + 1
  }
  return -1
}

