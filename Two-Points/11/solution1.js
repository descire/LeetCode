/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 
 * 11. 盛最多水的容器
 * 
 * Medium
 * 
 * 经典的双指针题目，但是难度似乎不符合 Medium
 * 
 * 72ms 99.27%
 * 35.7mb 23.20%
 */
const maxArea = height => {
  let ans = Number.MIN_SAFE_INTEGER
  let end = height.length - 1
  let start = 0

  while (start < end) {
    const s = height[start]
    const e = height[end]
    const y = Math.min(s, e)
    ans = Math.max(ans, (end - start) * y)
    if (s < e) {
      start++
    } else {
      end--
    }
  }
  return ans
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49