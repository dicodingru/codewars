import mix from '../kata/4kyu/strings-mix';

describe('Tests', () => {
  it('Basic Lowercase', () => {
    const s1 = 'aa bbb ff cc dd';
    const s2 = 'a b c f dd';
    expect(mix(s1, s2)).toBe('1:bbb/1:aa/1:cc/1:ff/=:dd');
  });

  it('Complex', () => {
    expect(mix('Are they here', 'yes, they are here')).toBe('2:eeeee/2:yy/=:hh/=:rr');
    expect(mix('looping is fun but dangerous', 'less dangerous than coding'))
      .toBe('1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');
    expect(mix('Lords of the Fallen', 'gamekult')).toBe('1:ee/1:ll/1:oo');
    expect(mix('codewars', 'codewars')).toBe('');
    expect(mix('A generation must confront the looming ', 'codewarrs'))
      .toBe('1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr');
    expect(mix('=ytsxPcglyEcinsIfbym#bour:uxzg', 'Kkzjn%ewmx4iicsYwqgtSojecDsksf'))
      .toBe('1:yyy/2:sss/1:bb/1:gg/1:uu/1:xx/2:ee/2:ii/2:jj/2:kk/2:ww/=:cc');
  });
});
