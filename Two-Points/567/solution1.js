/**
 * https://leetcode-cn.com/problems/permutation-in-string/
 * 
 * 567. 字符串的排列
 * 
 * Medium
 * 
 * Sliding Window + HashTable
 * 
 * 108ms 87.75%
 * 37.5mb 72.39%
 * 
 */
const checkInclusion = (s1, s2) => {
  const l1 = s1.length
  const l2 = s2.length
  const record = new Map()
  // 统计 s1 中的字符个数
  for (let i = 0; i < l1; i++) {
    record.set(s1[i], (record.get(s1[i]) || 0) + 1)
  }

  // 维护一个长度为 l1 的窗口
  let start = 0
  let end = 0
  const valueInWindows = new Map()
  while (end < l2) {
    if (end - start + 1 > l1) {
      // 移除左边的元素
      valueInWindows.set(s2[start], valueInWindows.get(s2[start]) - 1)
      start++
    }
    valueInWindows.set(s2[end], (valueInWindows.get(s2[end]) || 0) + 1)
    if (end - start + 1 === l1 && isEqual(record, valueInWindows)) {
      // 子串 与 s1 的字符以及数量相等
      return true
    }
    end++
  }
  return false
}

function isEqual(m1, m2) {
  for (let [key, value] of m1) {
    if (m2.get(key) !== value) {
      return false
    }
  }
  return true
}