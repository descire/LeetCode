/**
 * https://leetcode-cn.com/problems/sort-colors/
 * 
 * 75. 颜色分类
 * 
 * Medium
 * 
 * 红 0
 * 白 1
 * 蓝 2
 * 
 * 标准 双指针
 * 
 * 68ms 97.04%
 * 34.5mb 7.03%
 */
const sortColors = nums => {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    const s = nums[start]
    const e = nums[end]
    if (s === 2) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      end--
      continue
    }
    if (s === 0) {
      start++
      continue
    }
    if (s === 1) {
      const findIndex = findNotOneIndex(nums, start, end)
      if (findIndex === -1) {
        return true
      }
      [nums[start], nums[findIndex]] = [nums[findIndex], nums[start]]
      continue
    }
  }
}

function findNotOneIndex(nums, start, end) {
  while (start <= end) {
    if (nums[start] !== 1) {
      return start
    }
    start++
  }
  return -1
}

const testcase = [2, 0, 2, 1, 1, 0]
sortColors(testcase)
console.log(testcase) // [0,0,1,1,2,2]

const testcase1 = [2, 0, 1]
sortColors(testcase1)
console.log(testcase1) // [0, 1, 2]
