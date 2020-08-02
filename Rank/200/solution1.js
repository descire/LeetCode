/**
 * 时间复杂度 O(n^3)
 * 
 * 空间复杂度 O(1)
 * 
 * 124ms 37.9mb
 */
const countGoodTriplets = function(arr, a, b, c) {
  const max = arr.length;
  let ans = 0;

  for (let i = 0; i < max - 2; i++) {
    for (let j = i + 1; j < max - 1; j++) {
      for (let k = j + 1; k < max; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] -arr[k]) <= c) {
          ans++;
        }
      }
    }
  }
  return ans;
};