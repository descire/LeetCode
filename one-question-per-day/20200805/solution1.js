/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const rob = function(root) {

  const { selected, notSelected } = dfs(root);

  return Math.max(selected, notSelected);

  function dfs(root) {
    if (!root) {
      return { selected: 0, notSelected: 0 };
    }

    const { selected: LS, notSelected: LN } = dfs(root.left);
    const { selected: RS, notSelected: RN } = dfs(root.right);

    const selected = root.val + LN + RN;
    const notSelected = Math.max(LS, LN) + Math.max(RS, RN);
    return { selected, notSelected };
  }
};