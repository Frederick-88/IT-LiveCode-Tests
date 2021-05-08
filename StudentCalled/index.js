const studentCalled = (firstData, secondData) => {
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
  studentCalled(
    ["Andi", "Messi", "Jokowi", "Ronaldo"],
    ["Sebastian", "Rachel", "Jokowi", "Messi"]
  ),
  ["Jokowi", "Messi"]
);
test(studentCalled(["Daniel", "Ani", "Budi"], ["Daniel"]), ["Daniel"]);
test(
  studentCalled(
    ["Zoe", "Pearson", "Abraham", "Luis"],
    ["Abraham", "Robert", "Forstman", "Katrina"]
  ),
  ["Abraham"]
);
test(
  studentCalled(
    ["Badu", "Gilang", "Silvy"],
    ["Lewandowski", "Buffon", "Mason"]
  ),
  []
);
test(
  studentCalled(
    ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"],
    ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"]
  ),
  ["Frederick", "Jason", "Upin", "Modric", "Kroos", "Chillwell"]
);
