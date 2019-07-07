/**
 * https://leetcode-cn.com/problems/longest-mountain-in-array/
 * 
 * 845. 数组中的最长山脉
 * 
 * Medium
 * 
 */
const longestMountain = A => {
  const max = A.length
  let ans = 0
  let flag = false // 当前处于递增区间

  let start = 0
  let end = 0

  while (end < max - 1) {
    const item = A[end]
    if (!flag) {
      if (item > A[end + 1] && end - start >= 1) {
        // 左边形成半峰
        flag = true
        continue
      }
      if ((item > A[end + 1] && end - start < 1) || item === A[end + 1]) {
        start = end + 1
      }
    } else {
      if (item <= A[end + 1]) {
        ans = Math.max(ans, end - start + 1)
        flag = false
        start = start + 1
        end = start
      }
    }
    end++
  }
  if (A[end - 1] > A[end]) {
    // 单调的情况
    ans = Math.max(ans, end - start + 1)
  }
  return ans > 2 ? ans : 0
}