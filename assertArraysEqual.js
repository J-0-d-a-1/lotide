const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// step1: input 2 arrays, output assert message

// step2:
// if it not 2 arrays -> false
// if arr1.length !== arr2.length -> `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`

// step3: between input and output
//  assertArraysEqual function
//    iterate over the 2 arrays
//      arr1[i] !== arr2[i] -> `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`
//      return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`

const assertArraysEqual = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`;
    }
  }

  return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
console.log(assertArraysEqual(1, [1]));
console.log(assertArraysEqual(["light", "house"], ["light", "house"]));
