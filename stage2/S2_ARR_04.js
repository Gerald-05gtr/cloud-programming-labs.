function flatten1(arr) {
    const result = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...item); // flatten one level
      } else {
        result.push(item);
      }
    }
    return result;
  }
  
  // Test case
  const input = [1, [2, 3], [4], 5, [[6]]];
  console.log(flatten1(input)); // [1, 2, 3, 4, 5, [6]]
  