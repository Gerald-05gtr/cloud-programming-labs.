function atLeast(min) {
    return (num) => num >= min;
  }
  
  // Test cases
  const nums = [3, 5, 8, 1, 10];
  
  const filtered = nums.filter(atLeast(5));
  
  console.log(filtered); // [5, 8, 10]
  console.log(nums.filter(atLeast(9))); // [10]
  console.log(nums.filter(atLeast(11))); // []
  