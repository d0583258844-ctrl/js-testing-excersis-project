// // todo.test.js - Tests for TodoList class
// // Run with: node --test todo.test.js

import { test } from "node:test";
import assert from "node:assert";
import { TodoList } from "./todo.js";

// // ===========================================
// // Test: Create Todo List
// // ===========================================

const todo = new TodoList();
todo.addTask("clean the room");

test("should create an empty todo list", () => {
  assert.deepStrictEqual(todo.getAllTasks(), [
    {
      id: 1,
      description: "clean the room",
      completed: false,
      createdAt: todo.getAllTasks()[0].createdAt,
    },
  ]);
});
test("if not given an argument", () => {
  assert.throws(() => todo.addTask());
});
// why this is work amd dont fale
// I did the error on comma in the methode!!!!!!

// // ===========================================
// // Test: Add Tasks
// // ===========================================

// test('should add a new task', () => {
//   // TODO: Add a task and verify its properties
//   // Check: description, completed status, id, createdAt
// });

// test('should add multiple tasks with unique IDs', () => {
//   // TODO: Add multiple tasks and verify each has a unique ID
// });

// test('should throw error for empty description', () => {
//   // TODO: Test that empty descriptions throw an error
//   // Hint: Use assert.throws()
// });

// // ===========================================
// // Test: Complete Tasks
// // ===========================================

test("should complete a task", () => {
  const complete = new TodoList();
});

test("should return false when completing non-existent task", () => {
  // TODO: Try to complete a task that doesn't exist
});

// // ===========================================
// // Test: Remove Tasks
// // ===========================================

// test('should remove a task', () => {
//   // TODO: Add a task, remove it, and verify it's gone
// });

// test('should return false when removing non-existent task', () => {
//   // TODO: Try to remove a task that doesn't exist
// });

// // ===========================================
// // Test: Get Tasks
// // ===========================================

// test('should get a specific task by id', () => {
//   // TODO: Add a task and retrieve it by ID
// });

// test('should return null for non-existent task', () => {
//   // TODO: Try to get a task that doesn't exist
// });

// test('should get all tasks', () => {
//   // TODO: Add multiple tasks and verify getAllTasks returns them all
// });

// // ===========================================
// // Test: Filter Tasks
// // ===========================================

// test('should get only completed tasks', () => {
//   // TODO: Add tasks, complete some, and verify filter works
// });

// test('should get only incomplete tasks', () => {
//   // TODO: Add tasks, complete some, and verify filter works
// });

// // ===========================================
// // Test: Count Tasks
// // ===========================================

// test('should count tasks correctly', () => {
//   // TODO: Add tasks, complete some, and verify all counts
//   // Test: getTotalCount(), getCompletedCount(), getIncompleteCount()
// });

// // ===========================================
// // Test: Edge Cases
// // ===========================================

// test('should not mutate original array when filtering', () => {
//   // TODO: Verify that getAllTasks returns a new array each time
//   // Hint: Use assert.notStrictEqual to check they're different objects
// });

// console.log('\n✅ All tests completed! Check results above.');
