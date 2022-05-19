/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const findBottomLeftValue = (root) => {
    let ans = [];
    dfs(root, 0, ans);
    return ans.pop();
}

function dfs(root, level, ans) {
    if (!root) {
        return;
    }

    if (ans[level] === undefined) {
        ans[level] = root.val;
    }

    dfs(root.left, level + 1, ans);
    dfs(root.right, level + 1, ans);
}