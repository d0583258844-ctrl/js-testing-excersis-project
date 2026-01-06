export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a + b;
}



export function grade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    throw new RangeError("Invalid score");
  }

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}
