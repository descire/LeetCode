/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const pathSum = (root, sum) => {
    const ans = [];
    const path = [];
    const dfs = (root, sum) => {
        if (!root) {
            return;
        }

        path.push(root.val);
        
        const _sum = sum - root.val;
        if (!root.left && !root.right && _sum === 0) {
            ans.push([...path]);
        }
        
        dfs(root.left, _sum);
        dfs(root.right, _sum);
        path.pop();
    }

    dfs(root, sum);

    return ans;
}