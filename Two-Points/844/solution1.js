/**
 * https://leetcode-cn.com/problems/backspace-string-compare/
 * 
 * 844. 比较含退格的字符串
 * 
 * Easy
 * 
 * 94.66%
 * 98.53%
 */
const backspaceCompare = (S, T) => {
  let sIndex = S.length - 1
  let tIndex = T.length - 1

  while (sIndex >= 0 || tIndex >= 0) {
    const s = S[sIndex] || ''
    const t = T[tIndex] || ''

    if (s === '#') {
      sIndex = countIndex(S, sIndex)
      continue
    }
    if (t === '#') {
      tIndex = countIndex(T, tIndex)
      continue
    }

    if (s !== t) {
      return false
    }
    sIndex--
    tIndex--
  }

  if (sIndex !== tIndex) {
    return false
  }
  return true
}

function countIndex (str, index) {
  let count = 1
  for (let i = index - 1; i >= 0; i--) {
    const s = str[i]
    if (s === '#') {
      count++
      continue
    }
    count--
    if (count === 0) {
      return i - 1
    }
  }
  return -1
}