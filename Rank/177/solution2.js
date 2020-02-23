const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
  const record = new Set();
  const result = help(0, leftChild, rightChild, record);
  const count = record.size;
  return (result && count === n - 1);
}

function help(n, leftChild, rightChild, record) {
  const leftItem = leftChild[n];
  const rightItem = rightChild[n];
  if (record.has(leftItem) || record.has(rightItem)) {
    return false;
  }

  let a = true;
  let b = true;

  if (leftItem !== -1) {
    record.add(leftItem);
    a = help(leftItem, leftChild, rightChild, record);
  } 

  if (rightItem !== -1) {
    record.add(rightItem);
    b = help(rightItem, leftChild, rightChild, record);
  }

  return a && b;
}

console.log(validateBinaryTreeNodes(4, [1,-1,3,-1], [2,-1,-1,-1]))