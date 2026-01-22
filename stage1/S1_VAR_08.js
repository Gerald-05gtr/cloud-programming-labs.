function safeAdd(a, b) {
    const maxSafe = Number.MAX_SAFE_INTEGER;
  
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return a + b; // use normal addition for non-integers
    }
  
    // if numbers exceed safe integer range, use BigInt
    if (Math.abs(a) > maxSafe || Math.abs(b) > maxSafe) {
      const result = BigInt(a) + BigInt(b);
      console.log("Using BigInt:", result);
      return result;
    } else {
      const result = a + b;
      console.log("Using Number:", result);
      return result;
    }
  }
  
  // Test cases
  safeAdd(10, 20); // Number
  safeAdd(9007199254740991, 1); // BigInt
  safeAdd(3.5, 2.5); // Number (float)
  