/**
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(nlogn) 
 */
const findMinArrowShots = function(points) {
  if (points.length === 0) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]);

  let endPos = points[0][1];
  let ans = 1;
  for (let [start, end] of points) {
    if (start > endPos) {
      endPos = end;
      ans++;
    }
  }
  return ans;
};