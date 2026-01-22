function cleanNumbers(arr) {
    return arr
      .map(item => +item.trim())    // convert strings to numbers
      .filter(num => !Number.isNaN(num)); // drop NaN
  }
  
  // Test case
  const input = [" 1 ", "x", "2", " 3.5 ", "abc", "4 "];
  console.log(cleanNumbers(input)); // [1, 2, 3.5, 4]
  