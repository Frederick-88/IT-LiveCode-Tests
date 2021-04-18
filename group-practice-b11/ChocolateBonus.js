let chocolateBonus, result;

const Bonus = (baseChocolate) => {
  try {
    if (chocolateBonus == undefined) {
      chocolateBonus = Math.floor(baseChocolate / 5);
      result = chocolateBonus + baseChocolate;
    }

    if (chocolateBonus > 5) {
      chocolateBonus = Math.floor(chocolateBonus / 5);
      result += chocolateBonus;
      return Bonus();
    } else {
      return result;
    }
  } finally {
    //clear up the variable for the next execution
    chocolateBonus = undefined;
    result = 0;
  }
};

const test = (testCase, result) => {
  if (testCase !== result) return console.log(false);
  return console.log(true);
};

test(Bonus(60), 74);
test(Bonus(100), 124);
test(Bonus(1000), 1249);
test(Bonus(1234), 1539);
