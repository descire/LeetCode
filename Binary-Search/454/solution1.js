/**
 * https://leetcode.com/problems/4sum-ii/submissions/
 * 
 * 454. 4Sum II
 * 
 * Medium
 */
const fourSumCount = (A, B, C, D) => {

  let ans = 0
  const max = A.length
  const sum1 = new Map()
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      const sum = A[i] + B[j]
      if (!sum1.has(sum)) {
        sum1.set(sum, 0)
      }
      sum1.set(sum, sum1.get(sum) + 1)
    }
  }

  const sum2 = new Map()
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      const sum = C[i] + D[j]
      if (!sum2.has(sum)) {
        sum2.set(sum, 0)
      }
      sum2.set(sum, sum2.get(sum) + 1)
    }
  }

  const sum2Keys = Array.from(sum2.keys()).sort((a, b) => a - b)
  for (let [key, value] of sum1.entries()) {
    const rest = binarySearch(sum2Keys, 0, sum2Keys.length - 1, 0 - key)
    if (rest !== undefined) {
      ans += (value * sum2.get(rest))
    }
  }

  return ans
}

function binarySearch(array, first, last, target) {
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2)
    const item = array[mid]
    if (item === target) {
      return item
    }
    if (item > target) {
      last = mid
    } else {
      first = mid + 1
    }
  }
  if (array[first] === target) {
    return array[first]
  }
  return undefined
}