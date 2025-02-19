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

// step1: input and output
// input 2 arrays(source, itemsToRemove), output array(newArray)

// step2: figure the behavior depending on data
// source and itemsToRemove aren'r arrays -> 'Give me 2 arrays 😡'

// step3: figure out between input and output
// function without
//  define newArray
//  iterate source
//    iterate itemsToRemove
//      if source[i] equal itemsToRemove[j], newArray.slice(source[i])
//  return newArray;

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break;
      }
    }

    if (!shouldRemove) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

console.log(without([1, 2, 3], [1, 3]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
