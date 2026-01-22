function groupBy(items, key) {
    const result = {};
  
    for (const item of items) {
      const groupKey = item[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
    }
  
    return result;
  }
  
  // Test cases
  const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" },
    { name: "Dave", role: "user" },
    { name: "Eve", role: "guest" }
  ];
  
  console.log(groupBy(users, "role"));
  /*
  {
    admin: [ { name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' } ],
    user: [ { name: 'Bob', role: 'user' }, { name: 'Dave', role: 'user' } ],
    guest: [ { name: 'Eve', role: 'guest' } ]
  }
  */
  