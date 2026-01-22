function makeAdder(x) {
    return (y) => x + y;
  }
  
  // Test cases
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(3));  // 8
  console.log(add5(10)); // 15
  console.log(add10(2)); // 12
  console.log(add10(5)); // 15
  