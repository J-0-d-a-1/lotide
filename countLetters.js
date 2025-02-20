const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// input: a sentence (a string), output{letter with count}

// behavior
//  if it has " ", we do not count

// between input and output
// function countLetters(sentence)
//  declair results = {};
//  for in loop (for (const item in sentence))
//    if the sentence[item] === ' ' retun
//    if(results[item]) reurn results[item] += 1
//    else return results[item] = 1;
//  return results;

const countLetters = function (sentence) {
  const results = {};

  const spaceRemovedSentence = sentence.replaceAll(" ", "");

  for (const item of spaceRemovedSentence) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

  return results;
};

console.log(countLetters("lighthouse in the house"));

const result1 = countLetters("l hl");

assertEqual(result1["l"], 2);
assertEqual(result1["h"], 1);
assertEqual(result1[" "], undefined);
