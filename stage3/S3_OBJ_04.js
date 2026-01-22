function omit(obj, keys) {
    const result = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !keys.includes(key)) {
        result[key] = obj[key];
      }
    }
  
    return result;
  }
  
  // Test cases
  const data = { name: "Alice", age: 25, city: "Paris", active: true };
  
  console.log(omit(data, ["age", "active"]));
  // { name: 'Alice', city: 'Paris' }
  
  console.log(omit(data, ["name"]));
  // { age: 25, city: 'Paris', active: true }
  
  console.log(omit(data, ["country"]));
  // { name: 'Alice', age: 25, city: 'Paris', active: true }
  