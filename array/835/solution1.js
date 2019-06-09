/**
 * https://leetcode.com/problems/image-overlap/
 * 
 * 835. Image Overlap
 * 
 * Medium
 * 
 * 724ms 10.53%
 * 36.3mb 45.16%
 */
const largestOverlap = (A, B) => {
  const rows = A.length
  const cols = A[0].length
  let ans = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      ans = Math.max(ans, Math.max(computedTotalOverlap(A, B, row, col), computedTotalOverlap(B, A, row, col)))
    }
  }
  return ans
}

function computedTotalOverlap(A, B, offsetX, offsetY) {
  const rows = A.length
  const cols = A[0].length
  let ans = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const bItem = B[i][j]
      let aItem = 0
      if (A[i - offsetX] !== undefined) {
        aItem = A[i - offsetX][j - offsetY] || 0
      }
      ans += bItem * aItem
    }
  }
  return ans
}