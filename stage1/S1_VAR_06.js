function classifyNumberLike(x) {
    if (typeof x === "number") {
      if (Number.isNaN(x)) return "nan";
      return "number";
    }
    return "not-a-number";
  }
  
  // Test cases
  const tests = [NaN, 0, "0", "abc", undefined];
  
  tests.forEach(v => {
    console.log(v, "=>", classifyNumberLike(v));
  });
  