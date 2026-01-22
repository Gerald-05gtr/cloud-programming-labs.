function isArray(value) {
    return Array.isArray(value); // standard method to check arrays
  }
  
  // Test cases
  const tests = [
    [],               // array
    [1, 2, 3],        // array
    {},               // object
    { a: 1 },         // object
    "string",         // string
    42,               // number
    null,             // null
    undefined         // undefined
  ];
  
  tests.forEach(v => {
    console.log(v, "=> isArray:", isArray(v));
  });
  