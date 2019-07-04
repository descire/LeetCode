/**
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
 * 
 * 524. 通过删除字母匹配到字典里最长单词
 * 
 * Medium
 * 
 * 长度最长 字典序最小
 * 
 * 120ms 93.75%
 * 40.4mb 40.00%
 */
const findLongestWord = (s, d) => {
  let ans = ''

  for (let i = 0, max = d.length; i < max; i++) {
    const sub = d[i]
    if (isSubWord(s, sub)) {
      ans = getLongestAndSmallerString(ans, sub)
    }
  }
  return ans
}

function getLongestAndSmallerString(source, target) {
  // 返回最长的
  if (target.length > source.length) {
    return target
  }
  // 相同情况 返回字典序小的
  if (target.length === source.length && target < source) {
    return target
  }
  return source
}

function isSubWord(source, target) {
  let s1 = 0
  let e1 = source.length - 1
  let s2 = 0
  let e2 = target.length - 1

  while (s1 <= e1 && s2 <= e2) {
    const preItem1 = source[s1++]
    const nextItem1 = source[e1--]
    const preItem2 = target[s2]
    const nextItem2 = target[e2]

    if (preItem1 === preItem2) {
      s2++
    }

    if (nextItem1 === nextItem2) {
      e2--
    }
  }
  return s2 > e2
}