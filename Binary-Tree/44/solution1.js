/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const largestValues = (root) => {
    const ans = [];
    dfs(root, 0, ans);
    return ans;
}

function dfs(root, level, ans) {
    if (!root) {
        return;
    }

    if (ans[level] === undefined) {
        ans[level] = Number.MIN_SAFE_INTEGER;
    }

    ans[level] = Math.max(ans[level], root.val);

    dfs(root.left, level + 1, ans);
    dfs(root.right, level + 1, ans);

    return;
}