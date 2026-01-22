const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 20 }
  ];
  
  // Sort by age ascending
  people.sort((a, b) => a.age - b.age);
  
  console.log(people);
  
  /* Expected output:
  [
    { name: 'Dave', age: 20 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 35 }
  ]
  */
  