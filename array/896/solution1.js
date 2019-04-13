/**
 * https://leetcode.com/problems/monotonic-array/
 * 
 * 896. Monotonic Array
 * 
 * Easy
 */
const isMonotonic = A => {
  const max = A.length
  if (max === 2) {
    return true
  }

  let flag = null

  for (let i = 0; i < max - 1; i++) {
    const cur = A[i]
    const next = A[i + 1]
    if (cur === next) {
      continue
    }

    const diff = cur > next
    if (flag === null) {
      flag = diff
      continue
    }

    if (flag !== diff) {
      return false
    }

  }
  return true
}