/**
 * 条件很重要 必出现 各不相同
 * 
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 */
const relativeSortArray = function(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  const record = new Map();
  const rest = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!record.has(arr1[i])) {
      record.set(arr1[i], 0);
    }
    record.set(arr1[i], record.get(arr1[i]) + 1);
    if (arr2.indexOf(arr1[i]) === -1) {
      rest.push(arr1[i]);
    }
  }

  const ans = [];
  for (let i = 0; i < arr2.length; i++) {
    const size = record.get(arr2[i]);
    ans.push(...Array(size).fill(arr2[i]));
  }

  return ans.concat(...rest);
};