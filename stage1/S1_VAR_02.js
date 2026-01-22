// Block scope with let
try {
    {
      let x = 10;
    }
    console.log(x);
  } catch {
    console.log("let is block-scoped and not accessible outside the block");
  }
  
  // Block scope with var
  try {
    {
      var y = 20;
    }
    console.log("var outside block:", y);
  } catch (e) {
    console.log(e.message);
  }
  
  // Explanation:
  // let variables are block-scoped, so they cannot be accessed outside the block.
  // var variables are function-scoped, so they can be accessed outside the block.
  