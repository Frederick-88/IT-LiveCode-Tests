// Question / Instructions :
// Have the function DifferentCases(str) take the str parameter being passed and return it in upper camel case format where the first letter of each word is capitalized.
// The string will only contain letters and some combination of delimiter punctuation characters separating each word.
// For example: if str is "Daniel LikeS-coding" then your program should return the string DanielLikesCoding.

const checker = (proposedResult, expectedResult) => {
  return proposedResult === expectedResult ? "Correct" : "Wrong";
};

const StringChallenge = (str) => {
  // code goes here
  const separatedStringWithValidation = str.split(/[-*%| ]/); // split the string into words with validations / informations received

  // after got the array consist list of word, transform each of them to be capitalize
  const capitalizedStringList = separatedStringWithValidation.map((string) => {
    string = string.toString().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  return capitalizedStringList.join("");
};

// keep this function call here
console.log(StringChallenge("Daniel LikeS-coding"));
console.log(
  checker(StringChallenge("Daniel LikeS-coding"), "DanielLikesCoding")
);
