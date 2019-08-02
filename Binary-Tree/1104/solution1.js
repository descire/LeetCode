/**
 * https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree/
 * 
 * 1104. 二叉树寻路
 * 
 * Medium
 * 
 * 80ms 50.00%
 * 34mb 100.00
 */
const pathInZigZagTree = label => {
  const res = [];
  // 注意层级的计算
  let level = Math.ceil(Math.log2(label + 1));
  while (level) {
    res.push(label);
    // 得到当前层级和上一级层级的边界
    const [left, right] = computeEdge(level);
    const [preLeft, preRight] = computeEdge(--level);
    let index = 0;
    if (left > right) {
      index = left - label;
    } else {
      index = label - left;
    }
    if (preLeft > preRight) {
      label = preLeft - Math.floor(index / 2);
    } else {
      label = preLeft + Math.floor(index / 2);
    }
  }
  return res.reverse();
}

function computeEdge(level) {
  let left = 2 ** level - 1;
  let right = 2 ** (level - 1);
  if (level % 2 !== 0) {
    [left, right] = [right, left];
  }
  return [left, right];
}

console.log(pathInZigZagTree(26))