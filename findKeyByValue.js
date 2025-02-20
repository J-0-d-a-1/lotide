const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// input object and value, output key(a string)

// if object doesnt have key of the given value: return undifned;

// define resultKey;
// for of loop (Object.key())
// for (const key of Object.key(object))
//  if object[key] === value
//    resultKey = key
//  else reslutKey = undifined
// return resultKey;

const findKeyByValue = function (object, value) {
  let resultKey;

  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      resultKey = key;
      return resultKey;
    }
  }

  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expans"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
