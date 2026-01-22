function transformUsers(users) {
    return users
      .filter(user => user.active)        // keep only active users
      .map(user => user.name.toUpperCase()) // uppercase names
      .sort();                             // sort A→Z
  }
  
  // Test case
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "Dave", active: true }
  ];
  
  console.log(transformUsers(users)); // ["ALICE", "CHARLIE", "DAVE"]
  