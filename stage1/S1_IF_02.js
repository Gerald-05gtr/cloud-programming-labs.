function grade(score) {
    if (score < 0 || score > 100 || typeof score !== "number") {
      return null;
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Test cases
  console.log(grade(95));  // A
  console.log(grade(82));  // B
  console.log(grade(76));  // C
  console.log(grade(63));  // D
  console.log(grade(50));  // F
  console.log(grade(150)); // null
  console.log(grade(-5));  // null
  