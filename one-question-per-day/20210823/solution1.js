/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let ans = Number.MIN_SAFE_INTEGER;
  const list = [];
  for (let i = 0; i <= n; i++) {
    let item;
    if (i === 0) {
      item = 0;
    } else if (i === 1) {
      item = 1;
    } else if (i % 2 === 0){
      item = list[Math.floor(i / 2)];
    } else {
      item = list[Math.floor((i - 1) / 2)] + list[Math.floor((i - 1) / 2 + 1)];
    }

    ans = Math.max(ans, item);
    list[i] = item;
  }

  return ans;
};