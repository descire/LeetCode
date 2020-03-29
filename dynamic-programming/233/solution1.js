/**
 * https://leetcode-cn.com/problems/number-of-digit-one/
 * 
 * 233. 数字 1 的个数
 * 
 * Hard
 */
const countDigitOne = n => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const list = String(n).split('');
  let ans = 0;
  for (let i = 0, max = list.length; i < max; i++) {
    const currentItem = list[i];

    if (currentItem > 1) {
      let leftCount = Number.parseInt(list.slice(0, i).join('')) + 1;
      if (Number.isNaN(leftCount)) {
        leftCount = 1;
      }
      ans += leftCount * Math.pow(10, max - i - 1);
    } else if (currentItem === '1') {
      let leftCount = Number.parseInt(list.slice(0, i).join(''));
      if (Number.isNaN(leftCount)) {
        leftCount = 0;
      }
      ans += leftCount * Math.pow(10, max - i - 1);
      let rightCount = Number.parseInt(list.slice(i + 1).join(''));
      if (Number.isNaN(rightCount)) {
        rightCount = 0;
      }
      ans += rightCount + 1;
    } else {
      let leftCount = Number.parseInt(list.slice(0, i).join(''));
      if (Number.isNaN(leftCount)) {
        leftCount = 1;
      }
      ans += leftCount * Math.pow(10, max - i - 1);
    }
  
  }

  return ans;
}