/**
 * https://leetcode.com/problems/4sum-ii/submissions/
 * 
 * 454. 4Sum II
 * 
 * Medium
 * 
 * 116ms 99.33%
 * 50mb 98.28%
 */
const fourSumCount = (A, B, C, D) => {

  let ans = 0
  const max = A.length
  const sum1 = new Map()
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      const sum = A[i] + B[j]
      if (!sum1.has(sum)) {
        sum1.set(sum, 0)
      }
      sum1.set(sum, sum1.get(sum) + 1)
    }
  }
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      const sum = C[i] + D[j]
      const diff = 0 - sum
      if (sum1.has(diff)) {
        ans += sum1.get(diff)
      }
    }
  }

  return ans
}
