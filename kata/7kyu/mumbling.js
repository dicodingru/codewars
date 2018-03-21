const accum = (s) => {
  const stretch = (letter, length) => {
    const upper = letter.toUpperCase();
    const lower = letter.toLowerCase();
    return `${upper}${lower.repeat(length)}`;
  };

  return s.split('').reduce((acc, letter, index) =>
    [...acc, stretch(letter, index)], []).join('-');
};

export default accum;
