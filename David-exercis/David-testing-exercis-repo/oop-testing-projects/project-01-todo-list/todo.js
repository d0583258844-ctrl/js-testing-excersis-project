// todo.js - Todo List Class Implementation
// TODO: Implement the TodoList class with all required methods

export class TodoList {
  #tasksArr = [];
  // #nextIdCounter = 0;

  addTask(description) {
    if (!description || typeof description !== "string") {
      throw new Error("invalid argument");
    }

    const id = this.#tasksArr.length + 1;
    const newTodo = {
      id: id,
      description: description,
      completed: false,
      createdAt: new Date(),
    };
    this.#tasksArr.push(newTodo);
    return this.#tasksArr;
  }

  completeTask(id) {
    if (!id || id !== "number") {
      throw new Error("Invalid argument/ missing argument");
    }
    const check = this.#tasksArr.findIndex((todo) => todo.id == id);
    if (!check) {
      throw new Error("Todo not found");
    }
    this.#tasksArr[check].completed = true;
    return true;
  }

  removeTask(id) {
    if (!id) {
      throw new Error("Invalid argument/ missing argument");
    }
    const check = this.#tasksArr.findIndex((todo) => todo.id == id);
    console.log(check);
    if (check == -1) {
      throw new Error("Todo not found");
    }
    this.#tasksArr.splice(check, 1);
    return true;
  }

  getTask(id) {
    // TODO: Implement getting a specific task by id
    // Return null if not found
  }

  getAllTasks() {
    return this.#tasksArr;
    // TODO: Implement getting all tasks
    // Remember to return a copy, not the original array!
  }

  getCompletedTasks() {
    // TODO: Implement getting only completed tasks
  }

  getIncompleteTasks() {
    // TODO: Implement getting only incomplete tasks
  }

  getTotalCount() {
    // TODO: Implement getting total task count
  }

  getCompletedCount() {
    // TODO: Implement getting completed task count
  }

  getIncompleteCount() {
    // TODO: Implement getting incomplete task count
  }
}
