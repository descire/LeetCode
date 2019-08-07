/**
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 * 
 * 117. 填充每个节点的下一个右侧节点指针 II
 * 
 * Meidum
 * 
 * 552ms 88.00%
 * 68.4mb 40.54%
 */
const connect = root => {
  if (!root) {
    return null;
  }
  
  if (root.left) {
    root.left.next = findRightNode(root, true)
  }

  if (root.right) {
    root.right.next = findRightNode(root)
  }
  connect(root.right);
  connect(root.left);
  return root;
}

function findRightNode(root, isLeft) {
  if (isLeft && root.right) {
    return root.right;
  }

  while (root.next) {
    if (root.next.left) {
      return root.next.left;
    }

    if (root.next.right) {
      return root.next.right;
    }

    root = root.next;
  }

  return null;
}