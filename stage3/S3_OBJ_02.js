function mergeDefaults(defaults, overrides) {
    // Create a new object with all defaults
    const merged = { ...defaults };
  
    // Apply overrides
    for (const key in overrides) {
      if (overrides.hasOwnProperty(key)) {
        merged[key] = overrides[key];
      }
    }
  
    return merged;
  }
  
  // Test cases
  const defaults = { theme: "light", fontSize: 12, showSidebar: true };
  const overrides = { fontSize: 16, showSidebar: false };
  
  console.log(mergeDefaults(defaults, overrides));
  // { theme: 'light', fontSize: 16, showSidebar: false }
  
  console.log(mergeDefaults(defaults, {}));
  // { theme: 'light', fontSize: 12, showSidebar: true }
  
  console.log(mergeDefaults({}, overrides));
  // { fontSize: 16, showSidebar: false }
  