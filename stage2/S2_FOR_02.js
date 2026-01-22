function findFirstEven(nums) {
    for (const n of nums) {
      if (n % 2 === 0) return n;
    }
    return null; // no even number found
  }
  
  // Test cases
  console.log(findFirstEven([1, 3, 5, 6, 7])); // 6
  console.log(findFirstEven([1, 3, 5]));       // null
  console.log(findFirstEven([2, 4, 6]));       // 2
  