function sumNested(matrix) {
    let total = 0;
  
    for (const row of matrix) {
      for (const num of row) {
        total += num;
      }
    }
  
    return total;
  }
  
  // Test cases
  const matrix1 = [
    [1, 2, 3],
    [4, 5],
    [6]
  ];
  console.log(sumNested(matrix1)); // 21
  
  const matrix2 = [
    [10, 20],
    [5, 5, 5]
  ];
  console.log(sumNested(matrix2)); // 45
  
  console.log(sumNested([])); // 0
  