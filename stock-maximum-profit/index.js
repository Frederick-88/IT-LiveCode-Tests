// Question / Instructions :
// Have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x.
// For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.
// If there is not profit that could have been made with the stock prices, then your program should return -1.
// For example: arr is [10, 9, 8, 2] then your program should return -1.

// -----
// -----

const checker = (proposedResult, expectedResult) => {
  return proposedResult === expectedResult ? "Correct" : "Wrong";
};

const ArrayChallenge = (arr) => {
  // understanding challenge :
  // 1. each entity/number of array represent stock price on different days
  // 2. need to find the maximum profit that could have been made
  // 3. for it, need to catch & keep the lowest price that we meet upon going through the entry updated
  // 4. and keep compare with stock price of each day / next entity on the array
  // 5. once we catch the lowest and the highest stock profit margin that could have been made, then we return it as the output

  const arrayLength = arr.length;
  let lowestPriceHasUpdated = false;
  let lowestPrice = arr[0];
  let highestPrice = 0;
  let tempMargin = 0;
  let highestMargin = 0;

  for (let index = 0; index < arrayLength; index++) {
    if (lowestPrice > arr[index]) {
      lowestPrice = arr[index];
      lowestPriceHasUpdated = true;
    }

    if (lowestPriceHasUpdated) highestPrice = 0; // so the tempMargin won't do a wrong calculation with highestPrice that is already behind the freshly updated lowestPrice

    if (arr[index + 1] > highestPrice) {
      highestPrice = arr[index + 1];
      lowestPriceHasUpdated = false;
    }

    tempMargin = highestPrice - lowestPrice;
    // console.log(lowestPrice, highestPrice);

    if (highestMargin < tempMargin) {
      highestMargin = tempMargin;
    }
  }

  return highestMargin ? highestMargin : -1; // if highestMargin = 0 ( means no profit can be made ), need to return -1 based on instructions
};

// keep this function call here
console.log(ArrayChallenge([44, 30, 24, 32, 35, 30, 40, 38, 15]));
console.log(checker(ArrayChallenge([44, 30, 24, 32, 35, 30, 40, 38, 15]), 16));

console.log(ArrayChallenge([10, 9, 8]));
console.log(checker(ArrayChallenge([10, 9, 8]), -1));
