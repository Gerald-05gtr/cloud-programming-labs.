function pick(obj, keys) {
    const result = {};
  
    for (const key of keys) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    }
  
    return result;
  }
  
  // Test cases
  const data = { name: "Alice", age: 25, city: "Paris", active: true };
  
  console.log(pick(data, ["name", "city"]));
  // { name: 'Alice', city: 'Paris' }
  
  console.log(pick(data, ["age", "active", "gender"]));
  // { age: 25, active: true }
  
  console.log(pick(data, ["country"]));
  // {}
