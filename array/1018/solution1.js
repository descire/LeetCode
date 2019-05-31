/**
 * https://leetcode.com/problems/binary-prefix-divisible-by-5/
 * 
 * 1018. Binary Prefix Divisible By 5
 * 
 * Easy
 * 
 * 68ms 97.28%
 * 37.7mb 97.84%
 * 
 */
const prefixesDivBy5 = A => {

  let preSum = 0
  for (let i = 0, max = A.length; i < max; i++) {
    // 数组比较大 数字可能会越界！！！
    preSum = (preSum * 2 + A[i]) % 5

    if (preSum === 0) {
      A[i] = true
      continue
    }
    A[i] = false
  }
  return A
}