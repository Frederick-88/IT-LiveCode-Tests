function duplicate(array) {
  // code here
}

console.log(duplicate([1, 2, 3, 4, 5])); // expected answer : [1,2,3,4,5,1,2,3,4,5]
console.log(duplicate(["new", "day", "is", "good"])); // expected answer : ['new', 'day', 'is', 'good','new', 'day', 'is', 'good']
console.log(duplicate([3, 2, 7, 5, 6])); // expected answer : [3,2,7,5,6,3,2,7,5,6]
console.log(duplicate([1])); // expected answer : [1,1]

// // Answer
// function duplicate(array) {
//   return array.concat(array);
// }
