const whatTimeIsIt = (time) => {
  // do code here
  if (time === "12:00 am") return "It's midnight";
  if (time === "12:00 pm") return "It's noon";

  let string1 = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let string2 = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let hours = time.split(" ")[0].split(":")[0];
  let minutes = time.split(" ")[0].split(":")[1];
  let option = time.split(" ")[1];

  if (option === "pm") {
    if (minutes > 19)
      return `It's ${string1[hours]} past ${string2[minutes.split("")[0]]} ${
        string1[minutes.split("")[1]]
      } in the afternoon`;
    else
      return `It's ${string1[hours]} past ${string1[minutes]} in the afternoon`;
  } else {
    if (minutes > 19)
      return `It's ${string1[hours]} past ${string2[minutes.split("")[0]]} ${
        string1[minutes.split("")[1]]
      } in the morning`;
    else
      return `It's ${string1[hours]} past ${string1[minutes]} in the morning`;
  }
};

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon");
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon");
test(whatTimeIsIt("12:00 am"), "It's midnight");
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning");
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning");
