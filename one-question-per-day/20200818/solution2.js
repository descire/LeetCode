/**
 * 本身链表就是有序的。
 * 
 * 1、先遍历出数组结构 O(n)
 * 
 * 2、二分 + 递归 构造 BST  O(nlogn)
 * 
 * 优化掉 slice 带来的问题
 */
const sortedListToBST = function(head) {
    const list = help(head, []);
    return generateBST(list, 0, list.length - 1);
};

function generateBST(list, leftIndex, rightIndex) {
  if (rightIndex < leftIndex) {
    return null;
  }
  const middleIndex = Math.ceil((rightIndex + leftIndex) / 2 );
  const root = new TreeNode(list[middleIndex]);
  root.left = generateBST(list, leftIndex, middleIndex - 1);
  root.right = generateBST(list, middleIndex + 1, rightIndex);
  return root;
}

function help(head, ans) {
  let currentHead = head;
  while(currentHead) {
    ans.push(currentHead.val);
    currentHead = currentHead.next;
  }
  return ans;
}