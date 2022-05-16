/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const levelOrder = root => {
  if (!root) {
    return [];
  }

  const ans = [];
  let queue = [root];

  while (queue.length) {
    const len = queue.length
    const item = [];
    for (let i = 0; i < len; i++) {
      const currentRoot = queue.shift();
      item.push(currentRoot.val);

      currentRoot.left && queue.push(currentRoot.left);
      currentRoot.right && queue.push(currentRoot.right);
    }

    ans.push(item);
  }

  return ans;
}