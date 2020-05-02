const maxDiff = num => {
  const numString = String(num);
  let index1 = 0;
  let x1 = -1;
  while (index1 < numString.length) {
    if (numString[index1] !== '9') {
      x1 = numString[index1];
      break;
    }
    index1++;
  }

  let index2 = 0;
  let x2 = -1;
  while (index2 < numString.length) {
    if (numString[index2] !== '1' && numString[index2] !== '0') {
      x2 = numString[index2];
      break;
    }
    index2++;
  }

  let str1 = '';
  let str2 = '';
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === x1) {
      str1 += '9';
    } else {
      str1 += numString[i];
    }

    if (numString[i] === x2 && index2 !== 0) {
      str2 += '0';
    } else if (numString[i] === x2 && index2 === 0) {
      str2 += '1';
    } else {
      str2 += numString[i];
    }
  }
  if (str2 === '0') {
    str2 = '1';
  }
  return Number(str1) - Number(str2);
}

console.log(maxDiff(555) === 888); // 888
console.log(maxDiff(9) === 8); // 8
console.log(maxDiff(123456) === 820000); // 820000
console.log(maxDiff(10000) === 80000);
console.log(maxDiff(9288) === 8700)
console.log(maxDiff(0) === 8);
console.log(maxDiff(1101057) === 8808050);