import array_diff from '../kata/6kyu/array-dot-diff';

describe('Array.diff', () => {
  it('Tests', () => {
    expect(array_diff([1, 2, 3, 4], [1, 4])).toEqual([2, 3]);
    expect(array_diff([1, 2, 2, 2, 2, 4], [1, 4])).toEqual([2, 2, 2, 2]);
    expect(array_diff([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4], [9, 8, 7, 6, 5, 2])).toEqual([1, 4]);
    expect(array_diff([1, 2, 3, 4], [0])).toEqual([1, 2, 3, 4]);
  });
});
