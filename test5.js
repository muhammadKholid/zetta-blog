/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  let arr = [];
  words.forEach(flower => {
      arr.push(flower.slice(0, 2));
  })

  let find = [...new Set(arr)];
  if(find.length > 1 ){
    return find
  } else {
    return [...new Set(arr)][0];
  }
}

console.log(result(words));
