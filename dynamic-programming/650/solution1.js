/**
 * https://leetcode.com/problems/2-keys-keyboard/
 * 
 * 650. 2 Keys Keyboard
 * 
 * Medium
 * 
 * A => AAA
 * 
 * A 复制操作
 * AA 粘贴
 * AAA 粘贴
 */
const minSteps = n => {
  if (n === 1) {
    return 0
  }
  if (n === 2) {
    return 2
  }
  let ans = 2
  help(2, 1, 2)
  return ans
  function help (length, copyLength, step) {
    if (length === n) {
      ans = step
      return
    }
    if (length > n) {
      return
    }
    // 不复制的情况
    help(length + copyLength, copyLength, step + 1)

    // 复制 + 粘贴
    help(length * 2, length, step + 2)
  }
}