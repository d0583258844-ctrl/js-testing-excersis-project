import { test, describe } from "node:test";
import assert from "node:assert";
import { grade, sum } from "./functions-to-test.js";

// describe("sum function", () => {
//   test("return correct output when given a valid input", () => {
//     assert.equal(sum(4, 6), 10);
//   });
//   test("negative numbers", () => {
//     assert.strictEqual(sum(-23, -90), -113);
//   });
//   test("not valid argument", () => {
//     assert.throws(() => sum("2", 4));
//     assert.throws(() => sum(2, "4"));
//   });
// });

describe("grade function", () => {
  test("valid argument up to 100", () => {
    assert.strictEqual(grade(100), "A")
  });
  test("valid argument equal to 90", () => {
    assert.strictEqual(grade(90), "A")
  });
  test("valid argument under 90", () => {
    assert.strictEqual(grade(8), "B")
  });
});
