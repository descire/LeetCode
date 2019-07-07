/**
 * https://leetcode-cn.com/problems/longest-mountain-in-array/
 * 
 * 845. 数组中的最长山脉
 * 
 * Medium
 * 
 * 76ms 100%
 * 
 * 37.3mb 33.33%
 * 
 */
const longestMountain = A => {
  const max = A.length
  let ans = 0
  let start = 0
  let end = 0
  let up = false
  let down = false

  while (++end < max) {
    const curItem = A[end]
    const preItem = A[end - 1]
    if (curItem === preItem) {
      up = down = false
      start = end
    } else if (curItem > preItem) {
      // 递增
      up = true
      if (down) {
        start = end - 1
        down = false
      }
    } else {
      // 递减
      if (up && !down) {
        down = true
      }
      if (!up) {
        start = end
      }
    }

    if (up && down) {
      ans = Math.max(ans, end - start + 1)
    }
  }
  return ans
}