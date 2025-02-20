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
  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// input sentence, output object with array inside

// skip the space

// for loop
// for (let i = 0; i < sentence.length; i++)
//  if sentence[i] !== ' '
//    if results[sentence[i]] is true
//      reslts[sentence[i]].push(i)
//    else results[sentence[i]] = [i]
// return results;

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (item !== " ") {
      if (results[item]) {
        results[item].push(i);
      } else {
        results[item] = [i];
      }
    }
  }

  return results;
};

const result1 = letterPositions("hello");
const result2 = letterPositions("lighthouse in the house");

assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);

assertArraysEqual(result2.l, [0]);
assertArraysEqual(result2.i, [1, 11]);
assertArraysEqual(result2.g, [2]);
assertArraysEqual(result2.h, [3, 5, 15, 18]);
