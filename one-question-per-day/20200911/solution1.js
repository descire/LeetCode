/**
 * 递归 + 回溯
 * 
 * 时间复杂度 O(n*2^n)
 */
const combinationSum3 = function(k, n) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (k > 9) {
    return [];
  }

  const ans = [];

  recurison([], 0);

  return ans;

  function recurison(current, index) {
    if (index > 9) {
      return;
    }

    if (current.length === k && n === current.reduce((a, b) => a + b, 0)) {
      ans.push([...current]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      const item = arr[i];
      current.push(item);
      recurison(current, i + 1);
      current.pop();
    }
  }
};