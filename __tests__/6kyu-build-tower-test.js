import towerBuilder from '../kata/6kyu/build-tower';

describe('Tower Builder', () => {
  it('Build Towers', () => {
    const one = towerBuilder(1);
    const two = towerBuilder(2);
    const four = towerBuilder(4);
    expect(one.join('')).toEqual('*');
    expect(two.join('')).toEqual(' * ***');
    expect(four.join('')).toEqual('   *     ***   ***** *******');
  });
});
