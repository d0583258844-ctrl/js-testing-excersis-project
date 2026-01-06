export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Type of argument must to be number");
  }
  return a + b;
}

export function getUserById(id) {
  return new Promise((res, rej) => {
    if (!id) rej(new Error("id not found"));
    setTimeout(() => {
      res({
        name: "Dan",
        id,
      });
    }, 1);
  });
}
