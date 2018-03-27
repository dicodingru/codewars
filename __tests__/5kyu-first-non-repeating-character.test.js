import firstNonRepeatingLetter from '../kata/5kyu/first-non-repeating-character';

describe('First non-repeating character', () => {
  it('Lowercase', () => {
    expect(firstNonRepeatingLetter('stress')).toBe('t');
    expect(firstNonRepeatingLetter('concatenation')).toBe('e');
  });

  it('Uppercase', () => {
    expect(firstNonRepeatingLetter('Surround')).toBe('S');
    expect(firstNonRepeatingLetter('FIFA')).toBe('I');
  });

  it('All-repeating', () => {
    expect(firstNonRepeatingLetter('tikitaka')).toBe('');
    expect(firstNonRepeatingLetter('HoHoHo')).toBe('');
  });
});
