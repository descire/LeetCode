/**
 * https://leetcode.com/problems/ugly-number-ii/
 * 
 * 
 * 264. Ugly Number II
 * 
 * Medium
 * 
 * 动态规划
 */
const nthUglyNumber = n => {
  const ans = [1]
   
  let x = 0
  let y = 0
  let z = 0

  for (let i = 1; i < n; i++) {
    let xNext = ans[x] * 2
    let yNext = ans[y] * 3
    let zNext = ans[z] * 5
    const min = Math.min(xNext, yNext, zNext)
    if (min === xNext) {
      x++
    }
    if (min === yNext) {
      y++
    }
    if (min === zNext) {
      z++
    }
    ans[i] = min
  }

  return ans[n - 1]
}