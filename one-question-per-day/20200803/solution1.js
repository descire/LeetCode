/**
 * 时间复杂度 O(max(n1, n2))
 * 
 * 104ms 40.2mb
 */
const addStrings = function(num1, num2) {
  let end1Index = num1.length - 1;
  let end2Index = num2.length - 1;

  let ans = '';

  let z = 0;

  while (end1Index >= 0 || end2Index >= 0 || z) {
    let x = 0;
    let y = 0;
    if (num1[end1Index]) {
      x = num1[end1Index];
      end1Index--;
    }
    if (num2[end2Index]) {
      y = num2[end2Index];
      end2Index--;
    }

    const sum = Number.parseInt(x) + Number.parseInt(y) + z;
    z = Math.floor(sum / 10);
    ans = String(sum % 10) + ans;
  }

  return ans;
};