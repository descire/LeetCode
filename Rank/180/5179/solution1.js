/**
 * 
 * https://leetcode-cn.com/problems/balance-a-binary-search-tree/
 * 
 * 5179. 将二叉搜索树变平衡
 * 
 * Medium
 * 
 * 184ms 100.00%
 * 55.7mb 100.00%
 * 
 */
const balanceBST = root => {
  const nodes = [];
  help(root, nodes);
  return generateBalanceBST(nodes);
}

function help(root, nodes) {
  if (!root) {
    return;
  }
  help(root.left, nodes);
  nodes.push(root.val);
  help(root.right, nodes);
}

function generateBalanceBST(nodes) {
  if (!nodes.length) {
    return null;
  }
  const midIndex = Math.floor(nodes.length / 2);
  const mid = nodes[midIndex];
  const tree = new TreeNode(mid);
  tree.left = generateBalanceBST(nodes.slice(0, midIndex));
  tree.right = generateBalanceBST(nodes.slice(midIndex + 1));
  return tree;
}