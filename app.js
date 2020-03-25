const capitalize = string => {
  return string[0].toUpperCase() + string.slice(1);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {
  capitalize,
  add,
  subtract,
  multiply,
  divide
};
