/**
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 * 
 * 1013. 将数组分成和相等的三个部分
 * 
 * Easy
 * 
 * 68ms 96.72%
 * 39.3mb 100.00%
 * 
 * 时间复杂度 O(n^2)
 */
const canThreePartsEqualSum = A => {
  const max = A.length;
  if (max < 3) {
    return false;
  }
  const sum = A.reduce((a, b) => a + b, 0);

  if (sum % 3 !== 0) {
    return false;
  }

  const everyPartSum = sum / 3;

  let firstPartSum = 0;
  for (let i = 0; i < max - 2; i++) {
    firstPartSum += A[i];
    if (firstPartSum !== everyPartSum) {
      continue;
    }
    let secondPartSum = 0;
    for (let j = i + 1; j < max - 1; j++) {
      secondPartSum += A[j];
      if (secondPartSum === everyPartSum) {
        return true;
      }
    }
  }

  return false;
}