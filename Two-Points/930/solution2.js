/**
 * https://leetcode-cn.com/problems/binary-subarrays-with-sum/
 * 
 * 930. 和相同的二元子数组
 * 
 * Medium
 * 
 * 前缀和
 * 
 * 96ms 100.00%
 * 42.2mb 25.00%
 * 
 */
const numSubarraysWithSum = (A, S) => {
  const max = A.length
  let ans = 0
  let record = new Map()
  record.set(0, 1)
  let sum = 0
  for (let item of A) {
    sum += item
    if (sum >= S) {
      ans += record.get(sum - S) || 0
    }
    record.set(sum, (record.get(sum) || 0) + 1)
  }
  return ans
}