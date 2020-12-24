function warnTheSheep(queue) {
  /// your code here
  let message = "";
  const reverseQueue = [...queue.reverse()];
  const length = reverseQueue.length - 1;

  const findWolf = reverseQueue.indexOf("wolf");
  if (findWolf === 0) {
    message = "Please go away and stop eating my sheep";
  } else if (findWolf === length) {
    message = `Oi! Sheep number ${
      findWolf - 1
    }! You are about to be eaten by a wolf!`;
  } else if (findWolf !== -1 && findWolf !== length && findWolf !== 0) {
    message = `Oi! Sheep number ${findWolf + 1} and ${
      findWolf - 1
    }! You are about to be eaten by a wolf!`;
  } else {
    message = "no wolf found.";
  }

  return message;
}

const array = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
];

console.log(warnTheSheep(array));
