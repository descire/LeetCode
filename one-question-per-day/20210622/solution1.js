var permutation = function (s) {
  const nums = Array.from(s).sort();
  let ans = [];
  let current = [];

  function backtracing(used) {
      if (current.length === nums.length) {
        ans.push(current.join(''));
        return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
              continue;
          }
          if (!used[i]) {
              used[i] = true;
              current.push(nums[i]);
              backtracing(used);
              current.pop();
              used[i] = false;
          }


      }
  }
  backtracing([]);
  return ans;
};