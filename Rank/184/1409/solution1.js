/**
 * https://leetcode-cn.com/problems/queries-on-a-permutation-with-key/
 * 
 * 1409. 查询带键的排列
 * 
 * Medium
 * 
 * 76ms
 * 41mb
 * 
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 */
const processQueries = (queries, m) => {
  const ans = [];
  const list = Array.from({ length: m }, (item, index) => index + 1);

  for (let i = 0, max = queries.length; i < max; i++) {
    const item = queries[i];
    const index = list.findIndex(el => el === item);
    ans.push(index);
    list.splice(index, 1);
    list.unshift(item);
  }
  return ans;
}