/**
 * 
 * https://leetcode.com/problems/is-subsequence/
 * 
 * 392. Is Subsequence
 * 
 * Medium
 */
const isSubsequence = (s, t) => {
  const max = s.length
  return isSub(0, 0)
  function isSub (sIndex, startIndex) {
    if (sIndex === max) {
      return true
    }

    const index = t.indexOf(s[sIndex], startIndex)
    if (index < 0) {
      return false
    }

    return isSub(sIndex + 1, index + 1)
  }
}