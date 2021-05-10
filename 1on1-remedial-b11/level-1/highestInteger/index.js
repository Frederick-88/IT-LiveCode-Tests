const find = (input) => {
  //write your code here
  let max,
    result = "";
  try {
    let arr = input.split(" ").map((x) => +x);
    max = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== max) {
        result += `${Math.min(...arr.filter((x) => x > arr[i]))} `;
      } else {
        result += `^ `;
      }
    }
    return result;
  } finally {
    result = "";
  }
};

const test = (testCase, result) => {
  if (testCase !== result) return console.log(false);
  return console.log(true);
};

test(find("10 9 2 5 1 2 4 0 56"), "56 10 4 9 2 4 5 1 ^ ");
test(find("3 8 99 3 2 44 12"), "8 12 ^ 8 3 99 44");
