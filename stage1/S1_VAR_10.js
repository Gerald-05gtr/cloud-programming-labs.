function inspect(value) {
    return {
      type: typeof value,
      isArray: Array.isArray(value),
      isNull: value === null,
      isNaN: typeof value === "number" && Number.isNaN(value)
    };
  }
  
  // Test cases
  const tests = [
    null,
    undefined,
    42,
    NaN,
    "hello",
    true,
    [],
    {},
    () => {}
  ];
  
  tests.forEach(v => {
    console.log(v, "=>", inspect(v));
  });
  