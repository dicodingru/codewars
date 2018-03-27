const firstNonRepeatingLetter = (s) => {
  const splited = s.toLowerCase().split('');
  const unique = new Set(splited); // Set for storing characters that aren't repeated yet
  const counted = new Map(); // Map for counting characters

  splited.forEach((char) => {
    if (unique.has(char)) {
      counted[char] = counted[char] + 1 || 1;
      if (counted[char] > 1) {
        unique.delete(char);
      }
    }
  });

  if (unique.size === 0) {
    return '';
  }

  return s[splited.indexOf(unique.values().next().value)];
};

export default firstNonRepeatingLetter;
