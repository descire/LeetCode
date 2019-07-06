/**
 * https://leetcode-cn.com/problems/4sum/
 * 
 * 18. 四数之和
 * 
 * Medium
 * 
 * 120ms 99.36%
 * 36.7mb 69.77%
 * 
 * 1、数字中的数字任意
 * 2、无重复 不采用 HashTable
 * 3、通过双指针将嵌套双问题转化为单循环问题
 * 
 * O(n^3 + nlogn)
 */
const fourSum = (nums, target) => {
  let ans = []
  nums.sort((a, b) => a - b)
  const max = nums.length
  for (let i = 0; i < max - 3; i++) {
    const num1 = nums[i]
    // 过滤重复
    if (i > 0 && num1 === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < max - 2; j++) {
      const num2 = nums[j]
      // 过滤重复
      if (j > i + 1 && num2 === nums[j - 1]) {
        continue
      }

      let k = j + 1
      let q = max - 1
      while (k < q) {
        const num3 = nums[k]
        const num4 = nums[q]
        const sum = num1 + num2 + num3 + num4

        if (sum === target) {
          k++
          q--
          ans.push([num1, num2, num3, num4])

          while (k < q && nums[k] === nums[k - 1]) {
            k++
          }

          while (k < q && nums[q] === nums[q + 1]) {
            q--
          }
        } else if (sum > target) {
          q--
        } else {
          k++
        }
      }
    }
  }

  return ans
}