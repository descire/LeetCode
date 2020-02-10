/**
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/
 * 
 * 973. 最接近原点的 K 个点
 * 
 * Medium
 * 
 * 排序解决 O(nlogn)
 */
const kClosest = (points, K) => {
  points.sort((a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;
    const aDis = x1 ** 2 + y1 ** 2;
    const bDis = x2 ** 2 + y2 ** 2;
    return aDis - bDis;
  })

  return points.slice(0, K);
}