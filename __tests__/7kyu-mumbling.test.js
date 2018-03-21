import accum from '../kata/7kyu/mumbling';

describe('accum', () => {
  it('Basic tests', () => {
    expect(accum('ZpglnRxqenU'))
      .toEqual('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
    expect(accum('NyffsGeyylB'))
      .toEqual('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
    expect(accum('MjtkuBovqrU'))
      .toEqual('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
    expect(accum('EvidjUnokmM'))
      .toEqual('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
    expect(accum('HbideVbxncC'))
      .toEqual('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
  });
});
