function mapValues(obj, fn) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = fn(obj[key]);
      }
    }
    return result;
  }
  
  // Test cases
  const data = { a: 1, b: 2, c: 3 };
  
  const squared = mapValues(data, x => x * x);
  console.log(squared); // { a: 1, b: 4, c: 9 }
  
  const doubled = mapValues(data, x => x * 2);
  console.log(doubled); // { a: 2, b: 4, c: 6 }
  