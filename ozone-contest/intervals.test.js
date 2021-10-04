const mergeIntervals = require('./intervals');

describe('test intervals', () => {
    it('[[1,3], [2,6], [8,10], [15,18]] is ok', () => {
      expect(mergeIntervals([[1,3], [2,6], [8,10], [15,18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
    })
    it('[[1,3], [8,10], [15,18]] is ok', () => {
      expect(mergeIntervals([[1,3], [8,10], [15,18]])).toStrictEqual([[1,3], [8,10], [15,18]]);
    })
    it('[[1,3], [3,6], [8,10], [15,18]] is ok', () => {
      expect(mergeIntervals([[1,3], [3, 6], [8,10], [15,18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
    })
		it('[[2,3], [1,6], [8,10], [15,18]] is ok', () => {
      expect(mergeIntervals([[2,3], [1,6], [8,10], [15,18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
    })
		it('[[2,3], [1,6]] is ok', () => {
      expect(mergeIntervals([[2,3], [1,6]])).toStrictEqual([[1, 6]]);
    })
		it('[[2,3], [4,6]] is ok', () => {
      expect(mergeIntervals([[2,3], [4,6]])).toStrictEqual([[2,3], [4,6]]);
    })
		it('[[0,3], [3,6]] is ok', () => {
      expect(mergeIntervals([[0,3], [3,6]])).toStrictEqual([[0,6]]);
    })
		it('[[0,50], [3,6]] is ok', () => {
      expect(mergeIntervals([[0,50], [3,6]])).toStrictEqual([[0,50]]);
    })
		it('[[0,50], [3,6], [45,60]] is ok', () => {
      expect(mergeIntervals([[0,50], [3,6], [45,60]])).toStrictEqual([[0,60]]);
    })
  });
