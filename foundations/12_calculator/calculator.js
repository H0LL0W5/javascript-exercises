const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
};

const multiply = function(numbers) {
	let product = 1;
	for (let i = 0; i < numbers.length; i++) {
		product *= numbers[i];
	}
	return product;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
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
