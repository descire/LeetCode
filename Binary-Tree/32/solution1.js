/**
 * 队列
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const levelOrder = function(root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let temp = [];
    for (let i = 0; i < size; i++) {
      const item = queue.shift(); // 这个地方可以再优化
      temp.push(item.val);
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    ans.push(temp);
  }
  return ans;
};