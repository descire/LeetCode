/**
 * https://leetcode-cn.com/problems/3sum-closest/
 * 
 * 16. 最接近的三数之和
 * 
 * Medium
 * 
 * 96ms 97.27%
 * 
 * 34mb 76.92%
 * 
 * 通过对于数组的排序预处理，将嵌套循环转化为单循环问题
 */
const threeSumClosest = (nums, target) => {
  let diff = Number.MAX_SAFE_INTEGER
  let ans = 0
  nums.sort((a, b) => a - b)
  for (let i = 0, max = nums.length; i < max - 2; i++) {
    const a = nums[i]

    let start = i + 1
    let end = max - 1

    while (start < end) {
      const b = nums[start]
      const c = nums[end]

      const sum = a + b + c
      const distance = Math.abs(target - sum)
      // 选取距离最近的
      if (distance < diff) {
        ans = sum
        diff = distance
      }

      if (sum < target) {
        start++
      } else {
        end--
      }
    }
  }

  return ans
}