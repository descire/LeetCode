/**
 * https://leetcode-cn.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/
 * 
 * 1333. 餐厅过滤器
 * 
 * Medium
 * 
 * 排序题目
 * 
 * 88ms 90.91%
 * 41.7mb 100.00%
 */
const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {

  if (veganFriendly === 1) {
    restaurants = restaurants.filter(item => item[2] === veganFriendly && item[3] <= maxPrice && item[4] <= maxDistance);
  } else {
    restaurants = restaurants.filter(item => item[3] <= maxPrice && item[4] <= maxDistance);
  }

  // 综合排序
  restaurants.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  })

  return restaurants.map(item => item[0]);
}