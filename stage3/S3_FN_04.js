const nums = [1, 2, 3, 4, 5, 6];

// Process: filter even → square → sum
const sumOfSquaresEven = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((acc, n) => acc + n, 0);

console.log(sumOfSquaresEven); // 56
