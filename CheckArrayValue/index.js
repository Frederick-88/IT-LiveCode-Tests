/* return the highest pair number between 2 arrays
 e.g
 [2,5,1,8]
 [3,2,5]
 return with '5'
*/

function ArrayChallenge(arr) {
  const unique = arr.filter((element, index, nextElement) => {
    return nextElement.indexOf(element) === index;
  });
  let count = [];
  let max = 0;
  let result = -1;

  for (let i = 0; i < unique.length; i++) {
    let temporaryCount = 0;

    for (let j = 0; j < arr.length; j++) {
      if (unique[i] === arr[j]) {
        temporaryCount++;
      }
    }

    if (max < temporaryCount) {
      max = temporaryCount;
    }

    count[i] = temporaryCount;
  }

  if (max !== 1) {
    for (let index = 0; index < count.length; index++) {
      if (count[index] === max) {
        result = unique[index];
        break;
      }
    }
  }

  // code goes here
  return result;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
