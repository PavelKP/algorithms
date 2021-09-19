const resolveTask = require('./index');

describe('test lesson 1', () => {
	it('test \'5 1 1\' is ok', () => {
		expect(resolveTask([5, 1, 1])).toBe(0);
	})
	it('test \'3 -1 -1\' is ok', () => {
		expect(resolveTask([3, -1, -1])).toBe(1);
	})
	it('test \'4 4 4\' is ok', () => {
		expect(resolveTask([4, 4, 4])).toBe(2);
	})
	it('test \'4 2 2\' is ok', () => {
		expect(resolveTask([4, 2, 2])).toBe(0);
	})
	it('test \'2 -3 2\' is ok', () => {
		expect(resolveTask([2, -3, 2])).toBe(3);
	})
	it('test \'1000 -1000 1000\' is ok', () => {
		expect(resolveTask([1000, -1000, 1000])).toBe(3);
	})
	it('test \'100 0 100\' is ok', () => {
		expect(resolveTask([100, 0, 100])).toBe(0);
	})
});
