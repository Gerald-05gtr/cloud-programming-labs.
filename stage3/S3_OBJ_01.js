function get(obj, path, fallback) {
    const keys = path.split(".");
  
    let current = obj;
    for (const key of keys) {
      // Safe check: must be a non-null object
      if (current !== null && typeof current === "object" && current.hasOwnProperty(key)) {
        current = current[key];
      } else {
        return fallback;
      }
    }
  
    return current;
  }
  
  // Test cases
  const data = { a: { b: { c: 42 } } };
  
  console.log(get(data, "a.b.c", null));       // 42
  console.log(get(data, "a.b.x", "Not found")); // Not found
  console.log(get(data, "a.b.c.d", "Missing")); // Missing
  console.log(get(data, "a", "Missing"));      // { b: { c: 42 } }
  