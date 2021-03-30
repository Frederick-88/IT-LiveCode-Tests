function multiply(a) {
  // code here
  return function (b) {
    return a * b;
  };
}

const Test = (testcase, result) => console.log(testcase === result);

Test(multiply(5)(6), 30); // expected result : 30
Test(multiply(8)(2), 16); // expected result : 16
Test(multiply(10)(10), 100); // expected result : 100
Test(multiply(15)(12), 180); // expected result : 180

// answer
// function multiply(a) {
//   return function(b) {
//     return a * b;
//   }
// }
