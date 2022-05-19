/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
 const findBottomLeftValue = (root) => {
    let ans = 0;
    let currentLevel = -1;

    const dfs = (root, level) => {
        if (!root) {
            return;
        }

        if (level > currentLevel) {
            ans = root.val;
            currentLevel = level;
        }

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }

    dfs(root, 0);
    return ans;
}