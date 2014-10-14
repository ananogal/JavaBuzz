function JavaBuzz(){}

JavaBuzz.prototype.isDivisibleByThree = function(number) {
	return this._isDivisibleBy(number, 3);
};

JavaBuzz.prototype.isDivisibleByFive = function(number) {
	return this._isDivisibleBy(number, 5);
};

JavaBuzz.prototype.isDivisibleByFifteen = function(number) {
	return this._isDivisibleBy(number, 15);
};

JavaBuzz.prototype._isDivisibleBy = function(number, divisor) {
	return (number % divisor === 0);
};

JavaBuzz.prototype.shout = function(number) {
	if (this.isDivisibleByFifteen(number)) return "FizzBuzz";
	if (this.isDivisibleByThree(number)) return "Fizz";
	if (this.isDivisibleByFive(number)) return "Buzz";
	return number;
};