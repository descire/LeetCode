const destCity = paths => {
  const record = new Set();
  for (let i = 0; i < paths.length; i++) {
    record.add(paths[i][0]);
  }

  for (let i = 0; i < paths.length; i++) {
    if (!record.has(paths[i][1])) {
      return paths[i][1];
    }
  }
}

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) === 'Sao Paulo');
console.log(destCity([["B","C"],["D","B"],["C","A"]]) === 'A');
console.log(destCity([["A","Z"]]) === 'Z')