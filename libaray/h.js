const add = (a = 1, b = 2) => {
  return a + b;
};
const mul = (a = 7, b = 9) => {
  return a * b;
};
const sub = (a = 5, b = 3) => {
  return a - b;
};
const div = (a = 3, b = 4) => {
  return a / b;
};
module.exports = { add, mul, sub, div };
