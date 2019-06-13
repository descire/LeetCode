/**
 * https://leetcode.com/problems/is-subsequence/
 * 
 * 392. Is Subsequence
 * 
 * Medium
 * 
 * 80ms 42.86%
 * 38.6mb 84.94%
 * 
 * O(n)
 */
const isSubsequence = (s, t) => {

  const stack = s.split('')

  for (let i = 0, max = t.length; i < max; i++) {
    if (stack[0] === t[i]) {
      stack.shift()
    }
  }
  return stack.length === 0
}