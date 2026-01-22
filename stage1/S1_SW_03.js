function calc(a, op, b) {
    switch(op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? null : a / b;
      default:
        return null; // unknown operator
    }
  }
  
  // Test cases
  console.log(calc(10, "+", 5));  // 15
  console.log(calc(10, "-", 5));  // 5
  console.log(calc(10, "*", 5));  // 50
  console.log(calc(10, "/", 2));  // 5
  console.log(calc(10, "/", 0));  // null
  console.log(calc(10, "%", 3));  // null
  