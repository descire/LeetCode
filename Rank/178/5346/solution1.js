/**
 * https://leetcode-cn.com/problems/linked-list-in-binary-tree/
 * 
 * 5346. 二叉树中的列表
 * 
 * Medium 
 * 
 * 88ms 100.00%
 * 42.4mb 100.00%
 */
const isSubPath = (head, root) => {
  // 获取二叉树中每个子树的开始节点
  let trees = [];
  recordTrees(root, trees);

  // 判断以任意子树的根节点开始，节点值是否与链表一一对应
  while (head) {
    const currentTrees = [];
    for (const tree of trees) {
      if (tree && head.val === tree.val) {
        currentTrees.push(tree.left);
        currentTrees.push(tree.right);
      }
    }
    if (currentTrees.length === 0) {
      return false;
    }
    trees = currentTrees;
    head = head.next;
  }

  return true;
};


function recordTrees(root, record) {
  if (!root) {
    return false;
  }

  record.push(root);

  if (root.left) {
    record.push(root.left);
    recordTrees(root.left, record);
  }

  if (root.right) {
    record.push(root.left);
    recordTrees(root.right, record);
  }
}