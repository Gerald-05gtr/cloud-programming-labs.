function invert(obj) {
    const result = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (result.hasOwnProperty(value)) {
          // Already exists → convert to array or push
          if (Array.isArray(result[value])) {
            result[value].push(key);
          } else {
            result[value] = [result[value], key];
          }
        } else {
          result[value] = key;
        }
      }
    }
  
    return result;
  }
  
  // Test cases
  const data1 = { a: 1, b: 2, c: 1 };
  console.log(invert(data1));
  // { '1': ['a', 'c'], '2': 'b' }
  
  const data2 = { x: "apple", y: "banana", z: "apple" };
  console.log(invert(data2));
  // { apple: ['x', 'z'], banana: 'y' }
  
  const data3 = { p: 5, q: 6 };
  console.log(invert(data3));
  // { '5': 'p', '6': 'q' }
  