/**
 * https://leetcode-cn.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
 * 
 * 1334. 阈值距离内邻居最少的城市
 * 
 * Medium
 * 
 * 96ms 66.67%
 * 36.4mb 100.00%
 */
const findTheCity = (n, edges, distanceThreshold) => {
  // 首先求出每个城市到达城市数目最多的最短距离
  const distance = Array.from({ length: n }, () => Array(n).fill(10 ** 4 + 1));

  for (const [i, j, weight] of edges) {
    distance[i][j] = distance[j][i] = weight;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (k === j) {
          continue;
        } 
        distance[j][k] = Math.min(distance[j][k], distance[j][i] + distance[i][k]);
      }
    }
  }

  let city = 0;
  let minCityCount = n;
  for (let i = 0; i < n; i++) {
    let currentCityCount = 0;
    for (let j = 0; j < n; j++) {
      if (distance[i][j] <= distanceThreshold) {
        currentCityCount++;
      }
    }
    if (currentCityCount <= minCityCount) {
      minCityCount = currentCityCount;
      city = i;
    }
  }

  return city;
}