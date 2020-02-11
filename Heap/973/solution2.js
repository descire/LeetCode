/**
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/submissions/
 * 
 * 973. 最接近原点的 K 个点
 * 
 * Medium
 * 
 * 192ms 100.00%
 * 48mb 70%
 * 
 * O(n)
 */
const kClosest = (points, K) => {
  if (K === points.length) {
    return points;
  }
  findKClosest(points, 0, points.length - 1, K);
  return points.slice(0, K);
}

function swap(points, i, j) {
  if (i === j) {
    return;
  }
  const divisionPoint = points[i];
  points[i] = points[j];
  points[j] = divisionPoint;
}

function getDistance(points) {
  const [x, y] = points;
  // 这里没必要取根号，可以节省点时间复杂度
  return x ** 2 + y ** 2;
}

function findKClosest(points, startIndex, endIndex, K) {
  if (startIndex > endIndex) {
    return;
  }

  const startItemDistance = getDistance(points[startIndex]);

  let divisionPoint = startIndex;

  swap(points, startIndex, endIndex);

  for (let i = startIndex; i < endIndex; i++) {
    if (getDistance(points[i]) < startItemDistance) {
      swap(points, i, divisionPoint);
      divisionPoint++;
    }
  }
  swap(points, divisionPoint, endIndex);

  if (divisionPoint + 1 === K) {
    return
  } else if (divisionPoint + 1 < K) {
    findKClosest(points, divisionPoint + 1, endIndex, K);
  } else {
    findKClosest(points, startIndex, divisionPoint - 1, K);
  }
}