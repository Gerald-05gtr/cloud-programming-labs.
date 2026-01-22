function compose(...fns) {
    return function(initialValue) {
      return fns.reduceRight((acc, fn) => fn(acc), initialValue);
    };
  }
  
  // Test cases
  const add2 = x => x + 2;
  const multiply3 = x => x * 3;
  const square = x => x * x;
  
  const myComposition = compose(square, multiply3, add2);
  
  console.log(myComposition(2)); 
  // add2(2)=4 → multiply3(4)=12 → square(12)=144
  
  const simpleCompose = compose(x => x * 2, x => x + 1);
  console.log(simpleCompose(5)); 
  // 5 + 1 = 6 → 6 * 2 = 12
  