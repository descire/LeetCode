/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 
 * 双指针
 */
const sortArrayByParityII = A => {
  let i = 0;
  let j = 1;

  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 !== 0) {
      while (A[j] % 2 !== 0) {
        j += 2;
      }
      swap(A, i, j);
    }
  }
  return A;
}

function swap(arr, i , j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}