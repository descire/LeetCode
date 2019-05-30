/**
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * 
 * 1013. Partition Array Into Three Parts With Equal Sum
 * 
 * Easy
 * 
 * 56ms 99.75%
 * 
 * 39.7MB 61.86%
 */
const canThreePartsEqualSum = A => {

  const sum = A.reduce((a, b) => a + b, 0)

  const max = A.length

  if (sum % 3 !== 0) {
    return false
  }

  const everySum = sum / 3

  let cacheSum = 0
  let count = 0
  for (let i = 0; i < max; i++) {
    cacheSum += A[i]
    if (cacheSum === everySum) {
      count++
      cacheSum = 0
    }
  }

  return count === 3
}