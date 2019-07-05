/**
 * 
 * https://leetcode-cn.com/problems/max-consecutive-ones-iii/
 * 
 * 
 * 1004. 最大连续1的个数 III
 * 
 * 
 * Medium
 * 
 * 滑动窗口算法
 * 
 * 108ms 95.83%
 * 38mb 72.22%
 */
const longestOnes = (A, K) => {
  let oneCount = 0
  let zeroCount = 0
  let slow = 0 
  let fast = 0
  const max = A.length
  let ans = 0
  while (fast < max && slow <= fast) {
    const fastItem = A[fast]
    const slowItem = A[slow]
    if (zeroCount <= K) {
      // 向前扩张
      fast++
      if (fastItem === 0) {
        zeroCount++
      } else {
        oneCount++
      }
    } else {
      // 向前缩减
      if (slowItem === 0) {
        zeroCount--
      } else {
        oneCount--
      }
      slow++
    }
    ans = Math.max(ans, oneCount)
  }
  // 边界情况处理
  return ans + K > max ? max : ans + K
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([0, 0, 0, 1], 4))