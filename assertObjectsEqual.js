// const assertArraysEqual = function (arr1, arr2) {
//   if (!eqArrays(arr1, arr2)) {
//     console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   }
// };

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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

//

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  // console.log(`Example label: ${inspect(actual)}`);

  if (!eqObjects(actual, expected)) {
    console.log(
      `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
