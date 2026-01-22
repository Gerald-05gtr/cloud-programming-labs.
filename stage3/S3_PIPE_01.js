function pipe(...fns) {
    return function(initialValue) {
      return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
  }
  
  // Test cases
  const add2 = x => x + 2;
  const multiply3 = x => x * 3;
  const square = x => x * x;
  
  const myPipeline = pipe(add2, multiply3, square);
  
  console.log(myPipeline(2)); 
  // ((2 + 2) * 3)^2 = (4 * 3)^2 = 12^2 = 144
  
  const simplePipe = pipe(x => x + 1, x => x * 2);
  console.log(simplePipe(5)); 
  // (5 + 1) * 2 = 12
  