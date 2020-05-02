const checkIfCanBreak = (s1, s2) => {
  s1 = s1.split('');
  s2 = s2.split('');
  s1.sort();
  s2.sort();
  let isFlag = -1;
  for (let i = 0; i < s1.length; i++) {
    if (isFlag === -1 && s1[i] !== s2[i]) {
      isFlag = s1[i] >= s2[i];
    } else if (s1[i] === s2[i]) {
      continue;
    } else if (isFlag !== -1 && s1[i] > s2[i] !== isFlag) {
      return false;
    }
  }
  return true;
}

console.log(checkIfCanBreak('abc', 'xya') === true);
console.log(checkIfCanBreak('abe', 'acd') === false);
console.log(checkIfCanBreak('leetcodee', 'interview') === true);
console.log(checkIfCanBreak('yopumzgd', 'pamntyya') === true);
console.log(checkIfCanBreak('fiq', 'fvi') === true);
console.log(checkIfCanBreak('yf', 'qm') === false);
console.log(checkIfCanBreak('pazunsabwlseseeiimsmftchpafqkquovuxhhkpvphw', 'nkrtxuiuhbcyqulfqyzgjjwjrlfwwxotcdtqsmfeing') === true);