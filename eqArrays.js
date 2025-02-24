const assertEqual = require("./assertEqual");

// step1: input arrays, output boolean

// step2: figure out behavior depending on data
//  !Array.isArray(arr1) || !Array.isArray(arr2) -> Give me 2 arrays
//  arr1.length !== arr2.length -> return false

// step3: between input and output
//  Itrete over the two arrays
//    If arr1[i] doesn't equal arr2[i] return false
//    return true;
//

const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false

module.exports = eqArrays;
