const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i > 0) {
  //     newArr.push(arr[i]);
  //   }
  // }
  let newArr = arr.slice(1);
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], words[1]);
assertEqual(result[1], words[2]);
assertEqual(words.length, 3);

const word = ["Bootcamp"];
const result2 = tail(word);
assertEqual(result2.length, 0);
assertEqual(word.length, 1);
