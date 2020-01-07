/**
 * https://leetcode-cn.com/problems/baseball-game/
 * 
 * 682. 棒球比赛
 * 
 * Easy
 * 
 * 60ms 94.84%
 * 35.2mb 37.98%
 */
const calPoints = ops => {
  let ans = 0;
  const stack = [];
  for (let i = 0, max = ops.length; i < max; i++) {
    const p = ops[i];
    const stackLastIndex = stack.length - 1;
    switch(p) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        stack.push(stack[stackLastIndex] * 2);
        break;
      case '+':
        stack.push(stack[stackLastIndex] + stack[stackLastIndex - 1]);
        break;
      default:
        stack.push(Number.parseInt(p))
    }
  }

  return stack.reduce((x, y) => x + y, 0);
}