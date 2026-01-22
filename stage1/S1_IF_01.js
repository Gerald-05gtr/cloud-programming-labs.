function shippingCost(weightKg, isMember) {
    let cost;
  
    if (weightKg < 1) {
      cost = 10;
    } else if (weightKg <= 5) {
      cost = 20;
    } else {
      cost = 30;
    }
  
    // Apply 20% discount for members
    if (isMember) {
      cost *= 0.8;
    }
  
    return cost;
  }
  
  // Test cases
  console.log(shippingCost(0.5, false)); // 10
  console.log(shippingCost(3, true));    // 16 (20% discount)
  console.log(shippingCost(6, false));   // 30
  