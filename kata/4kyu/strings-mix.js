const mix = (s1, s2) => {
  const lowLetters1 = (s1.match(/[a-z]/g) || []).join('');
  const lowLetters2 = (s2.match(/[a-z]/g) || []).join('');
  const uniqLetters = Array.from(new Set(lowLetters1.concat(lowLetters2)));

  const parse = (letters, acc) => {
    if (letters.length === 0) {
      return acc;
    }
    const [letter, ...rest] = letters;
    const letterObj = { letter };
    const regex = new RegExp(letter, 'g');
    const q1 = (lowLetters1.match(regex) || []).length;
    const q2 = (lowLetters2.match(regex) || []).length;
    if (q2 === q1) {
      [letterObj.str, letterObj.max] = ['=', q1];
    } else if (q2 > q1) {
      [letterObj.str, letterObj.max] = ['2', q2];
    } else {
      [letterObj.str, letterObj.max] = ['1', q1];
    }
    return parse(rest, [...acc, letterObj]);
  };
  const parsed = parse(uniqLetters, []);

  const rendered = parsed
    .sort((a, b) => {
      if (a.max === b.max && a.str !== b.str) {
        return a.str < b.str ? -1 : 1;
      }
      if (a.max === b.max && a.str === b.str) {
        return a.letter < b.letter ? -1 : 1;
      }
      return b.max - a.max;
    })
    .map(obj => `${obj.str}:${obj.letter.repeat(obj.max)}`)
    .filter(str => str.length > 3)
    .join('/');

  return rendered;
};

export default mix;
