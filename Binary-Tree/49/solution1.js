/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const sumNumbers = root => {
    let ans = 0;

    const dfs = (root, path) => {
        if (!root) {
            return '';
        }

        path += root.val;

        if (!root.left && !root.right) {
            ans += Number.parseInt(path);
        }

        dfs(root.left, path);
        dfs(root.right, path);
    }

    dfs(root, '');

    return ans;
}