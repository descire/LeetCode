/**
 * 
 * https://leetcode.com/problems/transpose-matrix/
 * 
 * 
 * 867. Transpose Matrix
 * 
 * Easy
 */
const transpose = A => {
  let ans = []
  const rows = A.length
  if (!rows) {
    return ans
  }

  const cols = A[0].length
  for (let i = 0; i < cols; i++) {
    ans[i] || (ans[i] = [])
    for (let j = 0; j < rows; j++) {
      ans[i].push(A[j][i])
    }
  }

  return ans
}