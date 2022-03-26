const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(a) {
	return a.reduce((s, x) => add(s, x), 0);
};

const multiply = function(a) {
	return a.reduce((p, x) => p * x, 1);
};

const power = function(x, y) {
	return y === 0 ? 1 : x * power(x, y - 1);
};

const factorial = function(x) {
	return x === 0 ? 1 : x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
