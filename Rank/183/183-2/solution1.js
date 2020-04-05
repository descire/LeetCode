/**
 * https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/submissions/
 * 
 * 
 * 将二进制表示减到 1 的步骤数
 * 
 * Medium
 * 
 * 60ms 100.00%
 * 34.2mb 100.00%
 */
const numSteps = s => {
  let arr = s.split('');

  let step = 0;
  while (arr.length !== 1) {
    if (arr[arr.length - 1] === '0') {
      arr.pop();
    } else {
      addOne(arr);
    }
    step++;
  }
  return step;
}

function addOne(arr) {
  const maxIndex = arr.length - 1;
  arr[maxIndex] = '0';
  let flag = true;
  for (let i = maxIndex - 1; i >= 0; i--) {
    if (arr[i] === '1') {
      arr[i] = '0';
      flag = true;
    } else {
      arr[i] = '1';
      flag = false;
      break;
    }
  }
  if (flag) {
    arr.unshift('1');
  }
  return arr;
}