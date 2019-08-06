/**
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * 
 * 
 * 116. 填充每个节点的下一个右侧节点指针
 * 
 * medium
 * 
 * 104ms 98.95%
 * 39.3mb 79.49%
 */
const connect = root => {
  if (!root) {
    return null;
  }
  if (root.left) {
    root.left.next = root.right;
  }
  if (root.right && root.next) {
    root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);
  return root;
}