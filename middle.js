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

const assertArraysEqual = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Give me 2 arrays😡");
  }

  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// step1: input array, output array up to length 2

// step2;
//  if input is not array --> 'give me array 😡'
//  define the empty array (result = [];)
//  define index = array.length / 2;
//  if length of array < 3 --> return result without any value;
//  if length of array is odd
//    result.push(array[index])
//    return result array
//  if length of array is even
//    result.push(array[index])
//    result.push(array[index + 1])
//    return result

const middle = function (array) {
  if (!Array.isArray(array)) {
    return "Give me array 😡";
  }

  const result = [];
  if (array.length < 3) {
    return result;
  }

  const index = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) {
    result.push(array[index]);
    return result;
  }
  if (array.length % 2 === 0) {
    result.push(array[index - 1]);
    result.push(array[index]);
    return result;
  }
};

console.log("Not array:", middle(1));

console.log("less than 3:", middle([1]));
console.log("less than 3:", middle([(1, 2)]));

console.log("odd:", middle([1, 2, 3]));
console.log("odd:", middle([1, 2, 3, 4, 5]));

console.log("even:", middle([1, 2, 3, 4]));
console.log("even:", middle([1, 2, 3, 4, 5, 6]));

console.log("odd:", middle(["light", "house", "lab"]));
console.log("even:", middle(["hello", "world", "this", "is"]));

assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
