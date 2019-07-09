/**
 * https://leetcode-cn.com/problems/delete-columns-to-make-sorted/
 * 
 * 944. 删列造序
 * 
 * Easy
 * 
 * Greedy
 * 
 * 100ms 96.97%
 * 39.5mb 25.00%
 * 
 * 每一列尽最大的可能比较更多元素
 */
const minDeletionSize = A => {
  const rows = A.length
  const cols = A[0].length
  let ans = 0
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows - 1; row++) {
      if (A[row][col] > A[row + 1][col]) {
        ans++
        break
      }
    }
  }
  return ans
}