/**
 * https://leetcode-cn.com/problems/3sum/
 * 
 * 15. 三数之和
 * 
 * Medium
 * 
 * 不能有重复的组合
 * 
 * 不采用 hashtable 的去重方案
 * 
 * 260ms 95.96%
 * 47.2mb 39.65%
 * 
 */
const threeSum = nums => {
  let ans = []
  nums.sort((a, b) => a - b)
  // 特殊情况处理
  if (nums[0] > 0) {
    return ans
  }
  const max = nums.length
  for (let x = 0; x < max - 2; x++) {
    let y = x + 1
    let z = max - 1
    if (x > 0 && nums[x] === nums[x - 1]) {
      // 去重
      continue
    }
    while (y < z) {
      const sum = nums[x] + nums[y] + nums[z]
      if (sum === 0) {
        ans.push([nums[x], nums[y], nums[z]])
        y++
        z--
        // 去重
        while (y < z && nums[y] === nums[y - 1]) {
          y++
        }

        while (z > y && nums[z] === nums[z + 1]) {
          z--
        }
      }

      if (sum > 0) {
        z--
        continue
      }
      if (sum < 0) {
        y++
        continue
      }
    }
  }
  return ans
}