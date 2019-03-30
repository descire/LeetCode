/**
 * https://leetcode.com/problems/fibonacci-number/
 * 
 * 
 * 509. Fibonacci Number
 * 
 * Easy
 */
const fib = N => {
  let x = 0
  let y = 1
  if (N === 0) {
    return x
  }
  if (N === 1) {
    return y
  }

  for (let i = 2; i <= N; i++) {
    const result = x + y
    x = y
    y = result
  }
  return y
}