/**
 * https://leetcode-cn.com/problems/smallest-k-lcci/
 * 
 * 最小K个数
 * 
 * Medium
 * 
 * 128ms 100.00%
 * 42.1mb 100.00%
 */
const smallestK = (arr, k) => {
  if (arr.length === k) {
    arr.sort((a, b) => a - b);
    return arr;
  }
  findSmallestK(arr, 0, arr.length - 1, k);
  const ans = arr.slice(0, k);
  ans.sort((a, b) => a - b);
  return ans;
}

function findSmallestK(arr, start, end, k) {
  if (start > end) {
    return;
  }

  // 以开始下标的值为参考点
  const referenceValue = arr[start];

  let referenceIndex = start;

  swap(arr, start, end);
  // 寻找比参考值小的值
  for (let i = start; i < end; i++) {
    if (arr[i] < referenceValue) {
      swap(arr, i, referenceIndex);
      referenceIndex++;
    }
  }
  swap(arr, referenceIndex, end);

  if (referenceIndex + 1 === k) {
    return;
  } else if (referenceIndex + 1 < k) {
    return findSmallestK(arr, referenceIndex + 1, end, k);
  } else {
    return findSmallestK(arr, start, referenceIndex - 1, k);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}