/**
 * https://leetcode-cn.com/problems/split-linked-list-in-parts/
 * 
 * 725. 分隔链表
 * 
 * Medium
 * 
 * 60ms 98.18%
 * 35.9mb 25mb
 * 
 * O(Max(k, n)*Math.floor(n / k))
 */

const splitListToParts = (root, k) => {
  const linkedListLength = computedLinkedListLength(root);
  const countList = computedRange(linkedListLength, k);
  const ret = [];
  let currentHead = root;
  for (let i = 0; i < k; i++) {
    let len = countList[i];
    const x = currentHead;
    ret.push(x);
    while (--len && len > 0 && currentHead) {
      currentHead = currentHead.next;
    }

    if (currentHead) {
      const temp = currentHead;
      currentHead = currentHead.next;
      temp.next = null;
    }
  }
  return ret;
}

// O(n)
function computedLinkedListLength (root) {
  let count = 0;
  while (root) {
    count += 1;
    root = root.next;
  }
  return count;
}

// O(n)
function computedRange(totalCount, k) {
  const minCount = Math.floor(totalCount / k);
  let countList = new Array(k).fill(minCount);
  const baseTotal = minCount * k;
  let restTotal = totalCount - baseTotal;
  let increaseCount = 1;
  for (let i = 0; i < k; i++) {
    // 关键点：是否需要需要加一
    if ((increaseCount + 1) * (k - i) <= restTotal) {
      increaseCount += 1;
    }
    if (increaseCount * (k - i) === restTotal) {
      countList[i] += increaseCount;
      restTotal -= increaseCount;
    }
  }
  return countList.reverse();
}