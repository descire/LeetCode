/**
 * 本身链表就是有序的。
 * 
 * 1、先遍历出数组结构 O(n)
 * 
 * 2、二分 + 递归 构造 BST  O(nlogn)
 */
let count = 0;
const sortedListToBST = function(head) {
    const list = help(head, []);
    return generateBST(list);
};

function generateBST(list) {
  console.log(count++)
  if (!list || list.length === 0) {
    return null;
  }
  const middleIndex = Math.floor(list.length / 2);
  const root = new TreeNode(list[middleIndex]);
  root.left = generateBST(list.slice(0, middleIndex));
  root.right = generateBST(list.slice(middleIndex + 1));
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