/**
 * https://leetcode-cn.com/problems/interval-list-intersections/
 * 
 * 986. 区间列表的交集
 * 
 * Medium
 * 
 * 嵌套循环
 * 
 * 176ms 28.57%
 * 42.6mb 25.00%
 */
const intervalIntersection = (A, B) => {
  const ans = []
  for (let i = 0, max = A.length; i < max; i++) {
    const [start, end] = A[i]
    let s1 = start
    let e1 = end
    for (let j = 0, submax = B.length; j < submax; j++) {
      const [subStart, subEnd] = B[j]
      if (end < subStart) {
        break
      }
      s1 = Math.max(start, subStart)
      e1 = Math.min(end, subEnd)
      if (e1 >= s1) {
        ans.push([s1, e1])
      }
    }
  }
  return ans
}

const A = [[0,2],[5,10],[13,23],[24,25]]
const B = [[1,5],[8,12],[15,24],[25,26]]

console.log(intervalIntersection(A, B)) // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]