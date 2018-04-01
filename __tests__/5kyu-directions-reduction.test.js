import dirReduc from '../kata/5kyu/directions-reduction';

describe('Directions Reduction', () => {
  it('Tests', () => {
    const dirs1 = ['NORTH'];
    const dirs2 = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    const dirs3 = ['EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'SOUTH'];
    expect(dirReduc(dirs1)).toEqual(['NORTH']);
    expect(dirReduc(dirs2)).toEqual([]);
    expect(dirReduc(dirs3)).toEqual(['EAST']);
  });
});
