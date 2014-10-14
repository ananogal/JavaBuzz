describe('JavaBuzz', function() {
	
	describe('number can be divided', function() {
		it('by three', function() {
			var javaBuzz = new JavaBuzz();
			expect(javaBuzz.isDivisibleByThree(3)).toBe(true)
		});
	});
});