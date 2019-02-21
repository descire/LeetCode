/**
 * 
 * https://leetcode.com/problems/is-subsequence/
 * 
 * 392. Is Subsequence
 * 
 * Medium
 */
const isSubsequence = (s, t) => {
  if (s.length === 0) {
    return true
  }
  const l1 = s.length - 1
  const l2 = t.length - 1

  let s1 = 0
  let e1 = l1

  let s2 = 0
  let e2 = l2

  while (s1 <= e1 && s2 <= e2) {
    const pre1 = s[s1]
    const next1 = s[e1]

    const pre2 = t[s2]
    const next2 = t[e2]

    if (pre2 === pre1) {
      s2++
      s1++
    } else {
      s2++
    }
    if (next2 === next1) {
      e1--
      e2--
    } else {
      e2--
    }

    if (s1 > e1) {
      return true
    }
  }

  return false
}