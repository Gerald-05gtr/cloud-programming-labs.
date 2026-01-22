// Step 1: declare a const object
const user = { name: "Ala", tags: [] };

// Step 2: push two tags
user.tags.push("student");
user.tags.push("developer");

// Print the updated object
console.log("After adding tags:", user);

// Step 3: try to reassign the object
try {
  user = {};
} catch (e) {
  console.log("Error on reassignment:", e.message);
}

// Explanation:
// The const variable cannot be reassigned, but the object it points to can be mutated.
