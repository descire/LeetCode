  /**
   * https://leetcode.com/problems/is-subsequence/
   * 
   * 392. Is Subsequence
   * 
   * Medium
   * 
   * 60ms 96.43%
   * 
   * 37.9MB 89.16%
   * 
   * O(n)
   */
  const isSubsequence = (s, t) => {

    let fromIndex = 0

    for (let i = 0, max = s.length; i < max; i++) {
      const item = s[i]
      const index = t.indexOf(item, fromIndex)
      if (index < 0) {
        return false
      } else {
        fromIndex = index + 1
      }
    }
    return true
  }