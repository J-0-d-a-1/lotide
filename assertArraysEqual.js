const eqArrays = require("./eqArrays");

// step1: input 2 arrays, output assert message

// step2:
// if it not 2 arrays -> false
// if !eqArrays(arr1, arr2) -> `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`

// step3: between input and output
//  assertArraysEqual function
//     !eqArrays(arr1, arr2) -> `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`
//     return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 4]);
assertArraysEqual([1, 2, 3, 4, 4], [1, 2, 3, 4, 4]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual(1, [1]);
assertArraysEqual(["light", "house"], ["light", "house"]);

module.exports = assertArraysEqual;
