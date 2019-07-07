/**
 * https://leetcode-cn.com/problems/binary-subarrays-with-sum/
 * 
 * 930. 和相同的二元子数组
 * 
 * Medium
 * 
 * 朴素解法
 * 
 * 2040ms 38.46%
 * 37.2mb 50.00%
 */
const numSubarraysWithSum = (A, S) => {
  let ans = 0
  const max = A.length
  for (let i = 0; i < max; i++) {
    let sum = A[i]
    if (sum === S) {
      ans++
    }
    for (let j = i + 1; j < max; j++) {
      sum += A[j]
      if (sum === S) {
        ans++
      }
      if (sum > S) {
        break
      }
    }
  }
  return ans
}