/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

const buildTree = (preorder, inorder) => {
    const record = new Map();
    for (let i = 0; i < inorder.length; i++) {
        record.set(inorder[i], i);
    }

    const _buildTree = (start1, end1, start2, end2) => {
        // 递归中止条件
        if (start1 > end1) {
            return null;
        }

        const element = preorder[start1];

        const root = new TreeNode(element);

        const index = record.get(element);
        const rightTreeLength = end2 - index;
        const leftTreeLength = end1 - start1 - rightTreeLength;

        root.left = _buildTree(start1 + 1, start1 + 1 + leftTreeLength - 1, index - leftTreeLength, index - 1);
        root.right = _buildTree(start1 + leftTreeLength + 1, end1, index + 1, end2);

        return root;
    }

    return _buildTree(0, preorder.length - 1, 0, inorder.length - 1);
}