describe('JavaBuzz', function() {
	var javaBuzz = new JavaBuzz();

	describe('number can be divided', function() {
		it('by three', function() {
			expect(javaBuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('by five', function() {
			expect(javaBuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('by fifteen', function (){
			expect(javaBuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});

	describe('number can not be divided', function() {
		it('by three', function() {
			expect(javaBuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('by five', function() {
			expect(javaBuzz.isDivisibleByFive(1)).toBe(false);		
		});

		it('by fifteen', function(){
			expect(javaBuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});

	describe('can shout Fizz, Buzz and both', function(){
		it('shouts Fizz', function () {
			expect(javaBuzz.shout(3)).toEqual("Fizz");
		});

		it('shouts Buzz', function() {
			expect(javaBuzz.shout(5)).toEqual("Buzz");
		});	

		it ('shouts FizzBuzz', function() {
			expect(javaBuzz.shout(15)).toEqual("FizzBuzz");
		});
	});	

	describe('shouts a number', function() {
		it('when its not divisible by 3, 5, or 15', function() {
			expect(javaBuzz.shout(2)).toEqual(2);
		});
	});
});