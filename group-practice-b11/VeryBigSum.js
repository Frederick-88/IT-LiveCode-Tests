function aVeryBigSum(array) {
  const filteredNumber = [];
  for (const item in array) {
    if (typeof array[item] === "string") {
      array[item] = Number(array[item].replace(/[^\d.-]/g, ""));
    }
    filteredNumber.push(array[item]);
  }
  return filteredNumber.reduce((a, b) => a + b);
}

const result = (testStudent, testCase) => testStudent === testCase;

console.log(result(aVeryBigSum([1000123, 1000555, 1000171, 1000223]), 4001072));
console.log(result(aVeryBigSum([100071, 99935, 12341, 127833]), 340180));
console.log(result(aVeryBigSum([21376743, 21438743, 23123, 43242]), 42881851));
console.log(
  result(aVeryBigSum([21376743, 21438743, "ini string", 43242]), 42858728)
);
