/**
 * BFS 队列
 */
const levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const current = [];
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      current.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.unshift(current);
  }
  return ans;
};