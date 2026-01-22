function countOccurrences(values) {
    const counts = {};
  
    for (const v of values) {
      counts[v] = (counts[v] || 0) + 1;
    }
  
    return counts;
  }
  
  // Test cases
  console.log(countOccurrences([1, 2, 2, 3, 1, 2])); 
  // { '1': 2, '2': 3, '3': 1 }
  
  console.log(countOccurrences(["apple", "banana", "apple"])); 
  // { apple: 2, banana: 1 }
  
  console.log(countOccurrences([])); 
  // {}
  