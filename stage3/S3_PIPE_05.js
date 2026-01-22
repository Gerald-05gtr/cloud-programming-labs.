function logPipeline(lines) {
    return lines
      .map(line => {
        const [level, rest] = line.split(": ");
        return { level, rest };
      })
      .filter(entry => entry.level === "INFO")
      .map(entry => {
        const match = entry.rest.match(/user=(\d+)/);
        return match ? Number(match[1]) : null;
      })
      .filter(id => id !== null);
  }
  
  // Test cases
  const logs = [
    "INFO: user=42",
    "ERROR: user=13",
    "INFO: user=7",
    "DEBUG: user=99",
    "INFO: user=21"
  ];
  
  console.log(logPipeline(logs)); // [42, 7, 21]
  