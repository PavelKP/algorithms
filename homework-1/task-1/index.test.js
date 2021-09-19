const resolveTask = require('./index');

describe('test lesson 1', () => {
    it('test \'0 0 0 \' is ok', () => {
      expect(resolveTask([0, 0, 0])).toBe(0);
    })
    it('test \'-1 0 1\' is ok', () => {
      expect(resolveTask([-1, 0, 1])).toBe(3);
    })
		it('test \'42 1 6\' is ok', () => {
      expect(resolveTask([42, 1, 6])).toBe(6);
    })
		it('test \'44 7 4\' is ok', () => {
      expect(resolveTask([44, 7, 4])).toBe(1);
    })
		it('test \'1 4 0\' is ok', () => {
      expect(resolveTask([1, 4, 0])).toBe(3);
    })
		it('test \'-3 2 4\' is ok', () => {
      expect(resolveTask([-3, 2, 4])).toBe(2);
    })
		it('test \'-128 0 0\' is ok', () => {
      expect(resolveTask([-128, 0, 0])).toBe(3);
    })
		it('test \'127 7 7\' is ok', () => {
      expect(resolveTask([127, 7, 7])).toBe(1);
    })
		it('test \'7 7 7\' is ok', () => {
      expect(resolveTask([7, 7, 7])).toBe(1);
    })
  });
  