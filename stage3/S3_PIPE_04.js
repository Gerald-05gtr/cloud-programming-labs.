function arrayPipeline(values) {
    return values
      .filter(v => !isNaN(v) && v !== null && v !== "") // keep valid numbers
      .map(v => +v)                                     // convert to number
      .map(n => n * 2)                                  // double
      .reduce((acc, n) => acc + n, 0);                 // sum
  }
  
  // Test cases
  const arr1 = ["1", "2", "x", null, "4"];
  console.log(arrayPipeline(arr1)); // (1+2+4)*2 = 14
  
  const arr2 = ["5", "10", "", "abc"];
  console.log(arrayPipeline(arr2)); // (5+10)*2 = 30
  
  const arr3 = ["0", "3"];
  console.log(arrayPipeline(arr3)); // (0+3)*2 = 6
  