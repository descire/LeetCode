/**
 * https://leetcode.com/problems/find-common-characters/
 * 
 * 1002. Find Common Characters
 * 
 * Easy
 */
const commonChars = A => {
  const max = A.length
  const ans = []
  if (!max) {
    return ans
  }

  let current = null
  current = record(A[0])

  for (let i = 1; i < A.length; i++) {
    const temp = record(A[i])
    current = intersection(current, temp)
  }

  for (let [key, value] of current) {
    for (let i = 0; i < value; i++) {
      ans.push(key)
    }
  }

  return ans
}

function intersection (source, target) {
  const result = new Map()
  for (let [key, value] of target) {
    const pre = source.get(key)
    if (pre) {
      const x = pre >= value ? value : pre
      result.set(key, x)
    }
  }
  return result
}

function record (s) {
  const cache = new Map()
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (!cache.get(item)) {
      cache.set(item, 0)
    }
    cache.set(item, cache.get(item) + 1)
  }
  return cache
}