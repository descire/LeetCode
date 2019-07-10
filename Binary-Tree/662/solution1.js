const widthOfBinaryTree = root => {
  if (!root) {
     return 0
   }
   const MAX = Number.MAX_SAFE_INTEGER
   const q = [ [root, 1] ]
   let ans = 1
   while (q.length) {
     ans = Math.max(q[q.length - 1][1] - q[0][1] + 1, ans)
     const max = q.length
     for (let i = 0; i < max; i++) {
       const x = q.shift()
       const [item, index] = x
       if (item.left) {
         q.push([item.left, (2 * index) % MAX])
       }
       if (item.right) {
         q.push([item.right, (2 * index + 1) % MAX])
       }
     }
   }
   return ans
 }