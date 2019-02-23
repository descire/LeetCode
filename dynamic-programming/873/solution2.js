/**
 * https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
 * 
 * 873. Length of Longest Fibonacci Subsequence
 * 
 * Medium
 * 
 */
const lenLongestFibSubseq = A => {
  const max = A.length
  if (max < 3) {
    return 0
  }

  const hash = {}

  for (let i = 0; i < max; i++) {
    hash[A[i]] = true
  }

  let ans = 0

  for (let i = 0; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      ans = Math.max(ans, findFib(A[i], A[j]))
    }
  }
  return ans

  function findFib (a, b) {
    let size = 0
    let result = [a, b]
    while (hash[a + b]) {
      [a, b] = [b, a + b]
      size += size === 0 ? 3 : 1
    }
    return size
  }
}