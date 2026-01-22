// Original functions converted to arrow functions

const square = n => n * n;

const isOdd = n => n % 2 !== 0;

const greet = name => `Hello, ${name}!`;

// Test cases
console.log(square(5));      // 25
console.log(isOdd(5));       // true
console.log(isOdd(4));       // false
console.log(greet("Alice")); // Hello, Alice!
