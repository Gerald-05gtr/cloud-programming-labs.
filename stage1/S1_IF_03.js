function normalizeName(input) {
    if (!input) return "Anonymous"; // falsy values
    return input.trim();
  }
  
  // Test cases
  console.log(normalizeName(""));       // Anonymous
  console.log(normalizeName(" "));      // Anonymous
  console.log(normalizeName(null));     // Anonymous
  console.log(normalizeName(" Ola "));  // Ola
  console.log(normalizeName("John"));   // John
  