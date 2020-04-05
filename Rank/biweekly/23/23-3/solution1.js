/**
 * https://leetcode-cn.com/problems/circle-and-rectangle-overlapping/
 * 
 * 圆和矩形是否有重叠
 * 
 * Medium
 * 
 * 68ms 100.00%
 * 33.9mb 100.00%
 */
const checkOverlap = (radius, x_center, y_center, x1, y1, x2, y2) => {

  if (x_center >= x1 && x_center <= x2 && (y_center >= y1 - radius) && (y_center <= y2 + radius)) {
    return true;
  }

  if (y_center >= y1 && y_center <= y2 && x_center >= x1 - radius && x_center <= x2 + radius) {
    return true;
  }
  return (
    ((x1 - x_center) ** 2 + (y1 - y_center) ** 2 <= radius ** 2)
    || ((x2 - x_center) ** 2 + (y2 - y_center) ** 2 <= radius ** 2)
    || ((x1 - x_center) ** 2 + (y2 - y_center) ** 2 <= radius ** 2)
    || ((x2 - x_center) ** 2 + (y1 - y_center) ** 2 <= radius ** 2)
  )
}