const whoIsit = (firstData, secondData) => {
  // do code here
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

test(whoIsit(["Joko", "Ani", "Budi"], ["Joko"]), ["Joko"]);
test(
  whoIsit(
    ["Andi", "Prabowo", "Jokowi", "Roberto"],
    ["Sebastian", "Rachel", "Jokowi", "Prabowo"]
  ),
  ["Jokowi", "Prabowo"]
);
test(
  whoIsit(
    ["Zoe", "Pearson", "Dona", "Luis"],
    ["Dona", "Robert", "Forstman", "Katrina"]
  ),
  ["Dona"]
);
test(whoIsit(["Badu", "Gilang", "Silvy"], ["Amal", "Adrian", "Margi"]), []);
test(
  whoIsit(
    ["Ian", "Aron", "Udin", "Adit", "Natalia", "Lia"],
    ["Ian", "Aron", "Udin", "Adit", "Natalia", "Lia"]
  ),
  ["Ian", "Aron", "Udin", "Adit", "Natalia", "Lia"]
);
