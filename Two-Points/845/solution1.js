/**
 * https://leetcode-cn.com/problems/longest-mountain-in-array/
 * 
 * 845. 数组中的最长山脉
 * 
 * Medium
 * 
 * 2068ms 12.50%
 * 36.6mb 100.00%
 */
const longestMountain = A => {
  const max = A.length
  let ans = 0

  for (let i = 1; i < max - 1; i++) {
    ans = Math.max(getMountainLen(A, i), ans)
  }
  return ans
}

function getMountainLen(A, index) {
  const max = A.length
  let leftLen = 0
  let rightLen = 0
  let start = index - 1
  let end = index + 1
  while (start >= 0 || end < max) {
    if (A[start] < A[start + 1]) {
      leftLen++
      start--
      continue
    }
    if (A[end] < A[end - 1]) {
      rightLen++
      end++
      continue
    }
    break
  }

  if (leftLen !== 0 && rightLen !== 0) {
    return leftLen + 1 + rightLen
  }
  return 0
}