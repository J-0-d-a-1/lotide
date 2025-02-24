const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 4]);
assertArraysEqual([1, 2, 3, 4, 4], [1, 2, 3, 4, 4]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual(1, [1]);
assertArraysEqual(["light", "house"], ["light", "house"]);
