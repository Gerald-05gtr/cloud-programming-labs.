function toNumberOrNull(x) {
    const num = +x; // unary plus converts to number
    return Number.isNaN(num) ? null : num;
  }
  
  // Test cases
  const tests = ["12", "12.5", " 12 ", "12x", ""];
  
  tests.forEach(v => {
    console.log(`"${v}" =>`, toNumberOrNull(v));
  });
  