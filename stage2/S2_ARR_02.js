function unique(values) {
    const seen = {};
    const result = [];
  
    for (const v of values) {
      if (!seen[v]) {
        seen[v] = true;
        result.push(v);
      }
    }
  
    return result;
  }
  
  // Test case
  const input = [1, 2, 2, 3, 1, 4, 5, 3];
  console.log(unique(input)); // [1, 2, 3, 4, 5]
  