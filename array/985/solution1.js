/**
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 * 
 * 985. Sum of Even Numbers After Queries
 * Easy
 */
const sumEvenAfterQueries = (A, queries) => {
  let sum = 0
  for (let i = 0, max = A.length; i < max; i++) {
    if (A[i] % 2 === 0) {
      sum += A[i]
    }
  }
  const ans = []
  for (let i = 0, max = queries.length; i < max; i++) {
    const [value, index] = queries[i]
    const x = A[index]
    if (x % 2 === 0) {
      sum -= x
    }
    A[index] += value
    if (A[index] % 2 == 0) {
      sum += A[index]
    }
    ans.push(sum)
  }

  return ans
}