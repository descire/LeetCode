/**
 * https://leetcode-cn.com/problems/interval-list-intersections/
 * 
 * 986. 区间列表的交集
 * 
 * Medium
 * 
 * 
 * 124ms 96.43%
 * 41.9mb 25.00%
 * 
 */
const intervalIntersection = (A, B) => {
  const aLen = A.length
  const bLen = B.length

  let ans = []

  let aStart = 0
  let bStart = 0

  while (aStart < aLen && bStart < bLen) {
    const [s1, e1] = A[aStart]
    const [s2, e2] = B[bStart]

    let s = Math.max(s1, s2)
    let e = Math.min(e1, e2)

    if (s <= e) {
      ans.push([s, e])
    }

    if (e2 <= e1) {
      bStart++
    } else {
      aStart++
    }
  }

  return ans
}

const A = [[0,2],[5,10],[13,23],[24,25]]
const B = [[1,5],[8,12],[15,24],[25,26]]

console.log(intervalIntersection(A, B)) // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]