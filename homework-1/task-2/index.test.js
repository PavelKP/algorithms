const resolveTask = require('./index');

describe('test lesson 1', () => {
    it('test \'100 5 6\' is ok', () => {
      expect(resolveTask([100, 5, 6])).toBe(0);
    })
		it('test \'10 1 9\' is ok', () => {
      expect(resolveTask([10, 1, 9])).toBe(1);
    })
		it('test \'100 50 60\' is ok', () => {
      expect(resolveTask([100, 50, 60])).toBe(9);
    })
		it('test \'100 1 2\' is ok', () => {
      expect(resolveTask([100, 1, 2])).toBe(0);
    })
		it('test \'100 1 100\' is ok', () => {
      expect(resolveTask([100, 1, 100])).toBe(0);
    })
		it('test \'100 100 99\' is ok', () => {
      expect(resolveTask([100, 100, 99])).toBe(0);
    })
		it('test \'100 99 100\' is ok', () => {
			expect(resolveTask([100, 99, 100])).toBe(0);
		})
		it('test \'100 20 10\' is ok', () => {
      expect(resolveTask([100, 20, 10])).toBe(9);
    })
		it('test \'31 6 3\' is ok', () => {
      expect(resolveTask([31, 6, 3])).toBe(2);
    })
		it('test \'10 2 1\' is ok', () => {
      expect(resolveTask([10, 2, 1])).toBe(0);
    })
		it('test \'2 2 1\' is ok', () => {
      expect(resolveTask([2, 2, 1])).toBe(0);
    })
		it('test \'99 98 2\' is ok', () => {
      expect(resolveTask([99, 98, 2])).toBe(2);
    })
		it('test \'10 9 2\' is ok', () => {
      expect(resolveTask([10, 9, 2])).toBe(2);
    })
  });
  