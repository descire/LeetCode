const commonChars = function(A) {
  const n = A.length;
  const obj = {};
  let res = [];
  for(let i = 0;i<26;i++){
    obj[String.fromCharCode(97+i)] = new Array(n).fill(0);
  }
  for(let i = 0;i < n;i++){
    for(let char of A[i]){
      obj[char][i]++;
    }
  }
  for(let char in obj){
    let count = Math.min(...obj[char]);
    while(count--) res.push(char);
  }
  return res;
};