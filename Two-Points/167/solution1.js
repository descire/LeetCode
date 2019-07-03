/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * 167. 两数之和 II - 输入有序数组
 * 
 * Easy
 * 
 * 91.86%
 * 57.10%
 */
const twoSum = (numbers, target) => {
  const max = numbers.length
  let start = 0
  let end = max - 1

  while (start < end) {
    const sum = numbers[start] + numbers[end]

    if (sum === target) {
      return [start + 1, end + 1]
    }

    if (sum > target) {
      end--
      continue
    }

    if (sum < target) {
      start++
      continue
    }
  }
}