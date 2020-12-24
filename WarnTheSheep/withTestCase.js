function warnTheSheep(queue) {
  // your code here
  const findWolf = queue.reverse().indexOf("wolf"); // reverse, then find the wolf's index / the location of the wolf
  
  // depend on the location, show relative results
  return findWolf === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${findWolf}! You are about to be eaten by a wolf!`;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result);
}

// Test assertions
Test(
  warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["sheep", "sheep", "wolf"]),
  "Pls go away and stop eating my sheep"
);
Test(
  warnTheSheep(["sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
  "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
