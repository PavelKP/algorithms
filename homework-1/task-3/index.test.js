const resolveTask = require('./index');

describe('test lesson 1', () => {
    it('test \'1 2 2003\' is ok', () => {
      expect(resolveTask([1, 2, 2003])).toBe(0);
    })
		it('test \'2 29 2008\' is ok', () => {
      expect(resolveTask([2, 29, 2008])).toBe(1);
    })
		it('test \'1 1 1970\' is ok', () => {
      expect(resolveTask([1, 1, 1970])).toBe(1);
    })
		it('test \'12 12 1970\' is ok', () => {
      expect(resolveTask([12, 12, 1970])).toBe(1);
    })
		it('test \'6 6 1970\' is ok', () => {
      expect(resolveTask([6, 6, 1970])).toBe(1);
    })
		it('test \'1 1 1970\' is ok', () => {
      expect(resolveTask([1, 1, 1970])).toBe(1);
    })
		it('test \'12 31 1970\' is ok', () => {
      expect(resolveTask([12, 31, 1970])).toBe(1);
    })
		it('test \'31 12 1970\' is ok', () => {
      expect(resolveTask([31, 12, 1970])).toBe(1);
    })
		it('test \'31 1 1970\' is ok', () => {
      expect(resolveTask([31, 1, 1970])).toBe(1);
    })
		it('test \'1 31 1970\' is ok', () => {
      expect(resolveTask([1, 31, 1970])).toBe(1);
    })
		it('test \'3 3 2067\' is ok', () => {
      expect(resolveTask([3, 3, 2067])).toBe(1);
    })
  });
  