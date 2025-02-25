const assert = require("chai").assert;
const middle = require("../middle");

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

describe("@middle", () => {
  it("return [2] for [1, 2, 3]", () => {
    const arr = [1, 2, 3];
    assert.deepEqual(middle(arr), [2]);
    assert.strictEqual(arr.length, 3);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(middle(arr), [2, 3]);
    assert.strictEqual(arr.length, 4);
  });

  it("return [] for an empty array", () => {
    const arr = [];
    assert.deepEqual(middle(arr), []);
    assert.strictEqual(arr.length, 0);
  });
});
