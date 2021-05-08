const calledStudentNames = (firstData, secondData) => {
  // do code here
  // answer
  return firstData.filter((item) => secondData.includes(item));
};

// do not change this code below
const test = (testCase, result) => {
  testCase.sort();
  result.sort();
  for (let i = 0; i < testCase.length; i++)
    if (testCase[i] != result[i]) return console.log(false);
  return console.log(true);
};

test(
  calledStudentNames(
    ["Andi", "Messi", "Jokowi", "Ronaldo"],
    ["Sebastian", "Rachel", "Jokowi", "Messi"]
  ),
  ["Jokowi", "Messi"]
);
test(calledStudentNames(["Daniel", "Ani", "Budi"], ["Daniel"]), ["Daniel"]);
test(
  calledStudentNames(
    ["Zoe", "Pearson", "Abraham", "Luis"],
    ["Abraham", "Robert", "Forstman", "Katrina"]
  ),
  ["Abraham"]
);
test(
  calledStudentNames(
    ["Badu", "Gilang", "Silvy"],
    ["Lewandowski", "Buffon", "Mason"]
  ),
  []
);
test(
  calledStudentNames(
    ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"],
    ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"]
  ),
  ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"]
);
