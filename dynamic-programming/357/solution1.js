/**
 * 
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 * 
 * 
 * 357. Count Numbers with Unique Digits
 * 
 * Medium
 */
const countNumbersWithUniqueDigits = n => {
  if (n == 0) {
    return 1
  }
  let ans = 10, base = 9
  for (let i = 2; i <= Math.min(10, n); i++) {
    base = base * (9 - i + 2)
    ans += base
  }
  return ans
}