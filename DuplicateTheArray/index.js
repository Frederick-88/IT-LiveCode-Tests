function duplicate(array) {
  // code here
}

// do not change this code below
const test = (testCase, result) => {
  if (testCase && testCase.length) {
    testCase.sort();
    result.sort();

    for (let i = 0; i < result.length; i++) {
      if (testCase[i] !== result[i]) {
        return console.log(false);
      }
    }
    return console.log(true);
  } else {
    return console.log(false);
  }
};

test(duplicate([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
test(duplicate(["new", "day", "is", "good"]), [
  "new",
  "day",
  "is",
  "good",
  "new",
  "day",
  "is",
  "good",
]);
test(duplicate([3, 2, 7, 5, 6]), [3, 2, 7, 5, 6, 3, 2, 7, 5, 6]);
test(duplicate([1]), [1, 1]);

// // Answer
// function duplicate(array) {
//   return array.concat(array);
// }
