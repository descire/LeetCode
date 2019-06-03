/**
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 * 
 * 989. Add to Array-Form of Integer
 * 
 * Easy
 * 
 * 120ms 81.00%
 * 38.9mb 79.43%
 */
const addToArrayForm = (A, K) => {
  const str = String(K)
  let amax = A.length - 1
  let kmax = str.length - 1

  let carry = 0

  while (carry !== 0|| kmax >= 0) {
    const aItem = A[amax] || 0
    const kItem = str[kmax] || 0
    const sum = aItem + Number.parseInt(kItem) + carry

    carry = Math.floor(sum / 10)
    const x = sum % 10
    if (amax >= 0) {
      A[amax] = x
    } else {
      A.unshift(x)
    }
    amax--
    kmax--
  }

  return A
}