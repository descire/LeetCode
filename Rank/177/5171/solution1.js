/**
 * https://leetcode-cn.com/problems/closest-divisors/
 * 
 * 5171. 最接近的因数
 * 
 * Medium
 * 
 * 108ms 100.00%
 * 34.7mb 100.00%
 */
const closestDivisors = num => {
  const [x1, y1] = findTwoNumber(num + 1);
  const [x2, y2] = findTwoNumber(num + 2);

  const abs1 = Math.abs(x1 - y1);
  const abs2 = Math.abs(x2 - y2);

  if (abs1 < abs2) {
    return [x1, y1];
  } else {
    return [x2, y2];
  }
}

function findTwoNumber(num) {
  let mid = Math.floor(Math.sqrt(num));

  let x = 0;
  let y = 0;
  let distance = Number.MAX_SAFE_INTEGER;

  while (mid > 0) {
    const other = num / mid;
    if (other % 1 === 0) {
      const tempDistance = Math.abs(mid - other);
      if (tempDistance < distance) {
        x = mid;
        y = other;
        distance = tempDistance;
      }
    }
    mid--;
  }
  return [x, y];
}