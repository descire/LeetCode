/**
 * https://leetcode-cn.com/problems/delete-columns-to-make-sorted/
 * 
 * 944. 删列造序
 * 
 * Easy
 * 
 * HashTable
 * 
 * 96ms 98.46%
 * 39.2mb 72.22%
 */
const minDeletionSize = A => {
  const max = A.length
  const record = new Set()
  for (let i = 0; i < max - 1; i++) {
    const cur = A[i]
    const next = A[i + 1]
    validStr(cur, next, record)
    // 提前结束
    if (record.size === cur.length) {
      return record.size
    }
  }
  return record.size
}

function validStr(s1, s2, record) {
  const max = s1.length
  for (let i = 0; i < max; i++) {
    if (s1[i] > s2[i]) {
      record.add(i)
    }
  }
}