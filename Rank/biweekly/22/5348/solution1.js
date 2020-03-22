/**
 * https://leetcode-cn.com/problems/find-the-distance-value-between-two-arrays/
 * 
 * 5348. 两个数组间的距离值
 * 
 * Easy
 * 
 * 76ms 100.00%
 * 34.8mb 100.00%
 */
const findTheDistanceValue = (arr1, arr2, d) => {
  let ans = 0;
  for (let i = 0, max = arr1.length; i < max; i++) {
    const item = arr1[i];
    let isValid = true;
    for (let j = 0, submax = arr2.length; j < submax; j++) {
      if (Math.abs(item - arr2[j]) <= d) {
        isValid = false;
      }
    }

    isValid && ans++;
  }

  return ans;
}