function normalizeString(str) {
    return str
      .trim()                       // Remove leading/trailing spaces
      .toLowerCase()                // Convert to lowercase
      .replace(/\s+/g, " ");        // Replace multiple spaces with one
  }
  
  // Test cases
  console.log(normalizeString("   Hello World   ")); 
  // "hello world"
  
  console.log(normalizeString("  THIS   is   a TEST  ")); 
  // "this is a test"
  
  console.log(normalizeString("SingleWord")); 
  // "singleword"
  