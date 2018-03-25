import findEvenIndex from '../kata/6kyu/equal-sides-of-an-array';

describe('Find Even Index of an Array', () => {
  it('Empty Array', () => {
    expect(findEvenIndex([])).toEqual(-1);
  });

  it('First Index', () => {
    expect(findEvenIndex([1, 10, -10])).toEqual(0);
  });

  it('Basic Examples', () => {
    expect(findEvenIndex([1, 2, 3, 4])).toEqual(-1);
    expect(findEvenIndex([1, 2, 3, 3])).toEqual(2);
  });

  it('Last Index', () => {
    expect(findEvenIndex([10, -10, 0, 0, 5])).toEqual(4);
  });
});
