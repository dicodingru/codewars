import rot13 from '../kata/5kyu/rot13-1';

describe('Tests', () => {
  it('Basic', () => {
    expect(rot13('test')).toBe('grfg');
    expect(rot13('Test')).toBe('Grfg');
    expect(rot13('!Test!')).toBe('!Grfg!');
  });
});
