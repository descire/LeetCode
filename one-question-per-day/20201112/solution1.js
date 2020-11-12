/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const sortArrayByParityII = function(A) {
  const ans = [];
  
  let x = 0;
  let y = 1;
  for (let item of A) {
    if (item % 2 === 0) {
      ans[x] = item;
      x += 2;
    } else {
      ans[y] = item;
      y += 2;
    }
  }

  return ans;
};