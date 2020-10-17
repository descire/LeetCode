/**
 * 双指针
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const merge = function(A, m, B, n) {
  const ans = [];
  let xindex = 0;
  let yindex = 0;
  while (xindex < m && yindex < n) {
    const x = A[xindex];
    const y = B[yindex];
    if (x <= y) {
      ans.push(x);
      xindex++;
    } else {
      ans.push(y);
      yindex++;
    }
  }
  while (xindex < m) {
    ans.push(A[xindex]);
    xindex++;
  }

  while (yindex < n) {
    ans.push(B[yindex]);
    yindex++;
  }

  A.forEach((item, index) => A[index] = ans[index]);
  return A;
};