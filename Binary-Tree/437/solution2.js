/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const pathSum = (root, sum) => {
    if (!root) {
        return 0;
    }

    const prefixSumMap = new Map();
    prefixSumMap.set(0, 1);

    const dfs = (root, currentSum) => {
        if (!root) {
            return 0;
        }

        currentSum += root.val;
        let count = getMapByDefault(prefixSumMap, currentSum - sum, 0)

        prefixSumMap.set(currentSum, getMapByDefault(prefixSumMap, currentSum, 0) + 1)
        count += dfs(root.left, currentSum) + dfs(root.right, currentSum);

        prefixSumMap.set(currentSum, getMapByDefault(prefixSumMap, currentSum, 0) - 1)
        return count;
    }

    return dfs(root, 0);
}

function getMapByDefault (map, key, defaultValue) {
    if (!map.has(key)) {
        return defaultValue;
    }

    return map.get(key);
}