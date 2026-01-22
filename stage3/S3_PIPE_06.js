function pipeSafe(...fns) {
    return function(initialValue) {
      let result = initialValue;
  
      try {
        for (const fn of fns) {
          result = fn(result);
        }
        return { ok: true, value: result };
      } catch (err) {
        return { ok: false, error: err.message || err };
      }
    };
  }
  
  // Test functions
  const add2 = x => x + 2;
  const multiply3 = x => x * 3;
  const throwIf5 = x => {
    if (x === 5) throw new Error("Value cannot be 5");
    return x;
  };
  
  // Pipelines
  const safePipeline1 = pipeSafe(add2, multiply3);
  console.log(safePipeline1(2)); 
  // { ok: true, value: 12 }
  
  const safePipeline2 = pipeSafe(add2, throwIf5, multiply3);
  console.log(safePipeline2(3)); 
  // add2(3)=5 → throw → { ok: false, error: "Value cannot be 5" }
  
  const safePipeline3 = pipeSafe(add2, throwIf5, multiply3);
  console.log(safePipeline3(2)); 
  // add2(2)=4 → throwIf5(4)=4 → multiply3(4)=12 → { ok:true, value: 12 }
  