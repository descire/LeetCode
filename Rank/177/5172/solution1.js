/**
 * https://leetcode-cn.com/problems/largest-multiple-of-three/
 * 
 * 5172. 形成三的最大倍数
 * 
 * Hard
 */
const largestMultipleOfThree = digits => {
  const record = Array(10).fill(0);
  let total = 0;
  const max = digits.length;
  
  for (let i = 0; i < max; i++) {
    record[digits[i]]++;
    total += digits[i];
  }

  // 边界情况
  if (record[0] === max) {
    return '0';
  }

  if (total % 3 === 1) {
    if (!deleteNum(1, record)) {
      deleteNum(2, record);
      deleteNum(2, record);
    }
  }

  if (total % 3 === 2) {
    if (!deleteNum(2, record)) {
      deleteNum(1, record);
      deleteNum(1, record);
    }
  }


  // 输出字符串
  let ans = '';
  for (let i = 9; i >= 0; i--) {
    while(record[i]--) {
      ans += i;
    }
  }
  return ans;
}

function deleteNum(num, record) {
  for (let i = num; i <= 9; i += 3) {
    if (record[i]) {
      record[i]--;
      return true;
    }
  }

  return false;
}