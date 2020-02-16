/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 
 * 40. 最小的k个数
 * 
 * Easy
 * 
 * 92ms 100.00%
 * 38mb 100.00%
 */

const getLeastNumbers = (arr, k) => {
  if (arr.length === k) {
    return arr;
  }
  findSmallestK(arr, 0, arr.length  - 1, k);
  return arr.slice(0, k);
}

function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function findSmallestK(arr, start, end, k) {
  if (start > end) {
    return false;
  }

  const currentValue = arr[start];
  let currentIndex = start;

  swap(arr, start, end);

  for (let i = start; i < end; i++) {
    if (arr[i] < currentValue) {
      swap(arr, i, currentIndex);
      currentIndex++;
    }
  }

  swap(arr, currentIndex, end);

  if (currentIndex + 1 === k) {
    return;
  } else if (currentIndex + 1 < k) {
    return findSmallestK(arr, currentIndex + 1, end, k);
  } else {
    return findSmallestK(arr, start, currentIndex - 1, k);
  }
}