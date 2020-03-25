const fn = require("./app.js");

test("first", () => {
  expect(fn.capitalize("fitty")).toBe("Fitty");
});

test("add", () => {
  expect(fn.add(2, 2)).toBe(4);
});

test("subtract", () => {
  expect(fn.subtract(2, 2)).toBe(0);
});

test("multiply", () => {
  expect(fn.multiply(2, 2)).toBe(4);
});

test("divide", () => {
  expect(fn.divide(2, 2)).toBe(1);
});
