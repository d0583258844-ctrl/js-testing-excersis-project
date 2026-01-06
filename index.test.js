// import { test, describe } from "node:test";
// import assert from "node:assert";
// import { sum, getUserById } from "./index.js";

// describe("sum function", () => {
//   test("return correct output when given a valid input", () => {
//     assert.equal(sum(1, 5), "6");
//   });
//   test("negative value", () => {
//     assert.strictEqual(sum(-1, -3), -4);
//   });
//   test("throw error when an argument is not a number", () => {
//     assert.throws(() => sum("1", 2));
//     assert.throws(() => sum(1, "2"));
//   });
// });

// describe("get user function", () => {
//   test("return user when id founded", async () => {
//     assert.deepEqual(await getUserById(1), { name: "Dan", id: 1 });
//   });
//   test("throw error when id not found", async () => {
//     await assert.rejects(getUserById());
//   });
// });
