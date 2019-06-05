/**
 * https://leetcode.com/problems/pancake-sorting/
 * 
 * 969. Pancake Sorting
 * 
 * Medium
 * 
 * 64ms 96.40%
 * 36.7mb 37.63%
 */
const pancakeSort = A => {
  const len = A.length
  const ans = []
  for (let i = len - 1; i >= 0; i--) {
    const { index } = findMaxAndIndex(A, 0, i)
    if (index === i) {
      // 当前不需要翻转
      continue
    }
    ans.push(index + 1)
    A = reverseStartToEnd(A, index)
    ans.push(i + 1)
    A = reverseStartToEnd(A, i)
  }

  return ans
}


function reverseStartToEnd(array, end) {
  const ans = []

  for (let i = end; i >= 0; i--) {
    ans.push(array[i])
  }

  for (let i = end + 1; i < array.length; i++) {
    ans.push(array[i])
  }

  return ans
}

function findMaxAndIndex(arr, start, end) {
  let max = Number.MIN_SAFE_INTEGER
  let index = start
  for (let i = start; i <= end; i++) {
    const item = arr[i]
    if (item > max) {
      max = item
      index = i
    }
  }
  return {
    max,
    index
  }
}