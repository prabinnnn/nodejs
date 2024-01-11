const sum = (a = 2, b = 4) => {
  return a + b;
};

const mul = (a = 3, b = 8) => {
  return a * b;
};

const Sub = (a = 9, b = 5) => {
  return a - b;
};
module.exports = { sum, mul, Sub };
