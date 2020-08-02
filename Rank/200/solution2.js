/**
 * 时间复杂度 O(min(arr.length, k) * arr.length)
 */
const getWinner = function(arr, k) {
  const len = arr.length;
  let max = Number.MIN_SAFE_INTEGER;
  let count = 0;
  let temp = 0;

  while (count < k) {
    const first = arr[0];
    const next = arr[1] || Number.MIN_SAFE_INTEGER;

    if (first > next) {
      count++;
      arr.splice(1, 1);
      arr.push(next);
    } else {
      count = 1;
      arr.splice(0, 1);
      arr.push(first);
    }

    max = Math.max(first, next);
    temp++;

    if (temp >= len) {
      return max;
    }
  }

  return arr[0];
};

/**
 * 时间复杂度 O(n)
 * 
 * 100ms 48.3mb
 */
const getWinner = function(arr, k) {
  let preIndex = 0;
  let nextIndex = 1;
  let count = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;

  while (nextIndex < arr.length) {
    if (arr[nextIndex] < arr[preIndex]) {
      count++;
    } else {
      count = 1;
      preIndex = nextIndex;
    }

    if (count === k) {
      return arr[preIndex];
    }

    maxNum = Math.max(maxNum, arr[nextIndex], arr[preIndex]);
    nextIndex++;
  }

  return maxNum;
};