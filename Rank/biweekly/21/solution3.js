const longestZigZag = root => {
  if (!root) {
    return 0;
  }
  const record = { height: 0 };

  help(root.left, true, 0, record);
  help(root.right, false, 0, record);

  return record.height;
}


function help(root, isLeft, height, record) {
  const currentMax = Math.max(height, record.height);
  record.height = currentMax;
  if (!root) {
    return;
  }
  if (isLeft) {
    help(root.left, true, 0, record);
    help(root.right, false, 1 + height, record);
  } else {
    help(root.left, true, height + 1, record);
    help(root.right, false, 0, record);
  }
}