/**
 * https://leetcode-cn.com/problems/long-pressed-name/
 * 
 * 925. 长按键入
 * 
 * Easy
 * 
 * 100%
 * 42.24%
 */
const isLongPressedName = (name, typed) => {
  const max = name.length

  let index1 = 0
  let index2 = 0

  while (index1 < max) {
    const originStr = name[index1]
    const str = typed[index2]
    if (originStr === str) {
      index1++
      index2++
      continue
    }

    if (str !== typed[index2 - 1]) {
      return false
    }
    index2++
  }

  return true
}