function typeLabel(value) {
    if (value === null) return "null";
    return typeof value;
  }
  
  // Test cases
  const tests = [null, undefined, 42, "42", true, {}, [], (() => {})];
  
  tests.forEach(v => {
    console.log(v, "=>", typeLabel(v));
  });
  