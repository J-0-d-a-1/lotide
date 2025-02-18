const assertEqual = function (actural, expected) {
  if (actural === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actural} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actural} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Learn", "Learn");
assertEqual("Lern", "Learn");
assertEqual(2, 2);
assertEqual(2, 2.2);
