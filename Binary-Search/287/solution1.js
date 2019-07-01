/**
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 * 
 * 287. 寻找重复数
 * 
 * Medium
 * 
 * 76ms 97.60%
 * 36.6mb 21.36%
 * 
 * HashMap
 */
const findDuplicate = nums => {
  const record = new Set()
  for (let i = 0, max = nums.length; i < max; i++) {
    const num = nums[i]
    if (record.has(num)) {
      return num
    }
    record.add(num)
  }
}