/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 * 
 * 80. 删除排序数组中的重复项 II
 * 
 *  --- 26题的进阶题
 * 
 * Medium
 * 
 * 
 * 重复数字不能超过 2 个
 * 
 * 88ms 99.54%
 * 36mb 34.28%
 */
const removeDuplicates = nums => {
  const max = nums.length
  let slow = 0
  let count = 0
  let preItem = null
  for (let fast = 0; fast < max; fast++) {
    const currentItem = nums[fast]
    if (currentItem !== preItem) {
      // 重新开始计数
      count = 1
      preItem = currentItem
      nums[slow++] = currentItem
      continue
    }

    if (currentItem === preItem && count < 2) {
      nums[slow++] = currentItem
      count++
    }
  }
  // 移除多余元素
  while (slow < max) {
    nums.pop()
    slow++
  }

  return nums.length
}


const testcase = [0, 0, 1, 1, 1, 1, 2, 3, 3]
removeDuplicates(testcase)
console.log(testcase)