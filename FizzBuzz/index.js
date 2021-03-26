function fizzBuzz(number) {
  // code here
  for (let index = 1; index <= 100; index++) {
    let fizz = index % 3 == 0; // divided by 3 will be empty
    let buzz = index % 5 == 0; // divided by 5 will be empty
    console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : index);
  }
}

console.log(fizzBuzz(100));
// loop that iterates up to 100.
// while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// // answer
// function fizzBuzz(number) {
//     for (let index = 1; index <= 100; index++) {
//       let fizz = index % 3 == 0; // divided by 3 will be empty
//       let buzz = index % 5 == 0; // divided by 5 will be empty
//       console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : index);
//     }
//   }
