/**
 * https://leetcode-cn.com/problems/validate-binary-tree-nodes/
 * 
 * 5170. 验证二叉树
 * 
 * Medium
 * 
 * 76ms 100.00%
 * 39.7mb 100.00%
 */
const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
  const record = new Set();
  const result = help(0, leftChild, rightChild, record);
  // 是否为一棵树
  const count = record.size;
  return (result && count === n - 1);
}

function help(n, leftChild, rightChild, record) {
  const leftItem = leftChild[n];
  const rightItem = rightChild[n];
  if (record.has(leftItem) || record.has(rightItem)) {
    // 存在非法的回路情况
    return false;
  }

  let a = true;
  let b = true;

  if (leftItem !== -1) {
    record.add(leftItem);
    a = help(leftItem, leftChild, rightChild, record);
  } 

  if (rightItem !== -1) {
    record.add(rightItem);
    b = help(rightItem, leftChild, rightChild, record);
  }

  return a && b;
}