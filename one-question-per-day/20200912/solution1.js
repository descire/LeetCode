/**
 * 本质上遍历二叉树
 * 
 * BFS
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const averageOfLevels = function(root) {
  const queue = [root];
  const ans = [];

  while (queue.length) {
    const size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      sum +=  item.val;
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    ans.push(sum / size);
  }

  return ans;
};