/**
 * 空间复杂度优化
 */
const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  let pre = 0
  let sum = 0

  for (let i = 2; i < max; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      pre += 1
    } else {
      pre = 0
    }
    sum += pre
  }
  return sum
}