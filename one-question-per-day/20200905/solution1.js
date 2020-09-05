/**
 * 回溯法解决
 * 
 * 时间复杂度 O(n!)
 */
const getPermutation = (n, k) => {
  let count = 0;
  const used = new Set();
  return helper([]);
  function helper (temp) {
    if (temp.length === n) {
      count++;
      if (count === k) {
        return temp.join('');
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used.has(i)) {
        continue;
      }
      temp.push(i);
      used.add(i);
      const res = helper(temp);
      temp.pop();
      used.delete(i);
      if (res) {
        return res;
      }
    }
  }

};