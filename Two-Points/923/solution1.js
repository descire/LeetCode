/**
 * https://leetcode-cn.com/problems/3sum-with-multiplicity/
 * 
 * 923. 三数之和的多种可能
 * 
 * Medium
 * 
 * 220ms 29.63%
 * 35.4mb 50.00%
 * 
 * 双指针
 */
const MAX = 10 ** 9 + 7
const threeSumMulti = (A, target) => {
  let ans = 0
  A.sort((a, b) => a - b)
  const max = A.length
  for (let x = 0; x < max; x++) {
    let y = x + 1
    let z = max - 1

    while (y < z) {
      const sum = A[x] + A[y] + A[z]
      if (sum === target) {
        let repeatY = 1
        let repeatZ = 1

        // 开始计算重复数
        let tempY = y + 1
        while (tempY < z && A[y] === A[tempY]) {
          repeatY++
          tempY++
        }
        let tempZ = z - 1
        while (tempZ > y && A[z] === A[tempZ]) {
          repeatZ++
          tempZ--
        }
        const s = z - y + 1
        if (s <= repeatY + repeatZ && A[y] === A[z]) {
          // 00000 这种情况 需要采用组合处理
          ans = (ans + s * (s - 1) / 2 % MAX) % MAX
          break
        }
        // xxxyyy
        ans = (ans + (repeatY * repeatZ) % MAX) % MAX
        y += repeatY
        z -= repeatZ
        continue
      }
      
      if (sum > target) {
        z--
      } else {
        y++
      }
    }
  }

  return ans
}