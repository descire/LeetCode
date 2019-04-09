/**
 * https://leetcode.com/problems/fair-candy-swap/
 * 
 * 888. Fair Candy Swap
 * 
 * Easy
 */
const fairCandySwap = (A, B) => {
  const sum1 = A.reduce((x, y) => x + y, 0)
  const sum2 = B.reduce((x, y) => x + y, 0)

  if ((sum1 - sum2) % 2 !== 0) {
    return []
  }
  const diff = (sum1 - sum2) / 2
  for (let i = 0; i < A.length; i++) {
    const x = A[i]
    const y = x - diff
    if (B.includes(y)) {
      return [x, y]
    }
  }

  return []
}