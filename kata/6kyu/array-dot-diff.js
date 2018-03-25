const array_diff = (a, b) => {
  const off = new Set(b);
  return a.filter(item => !off.has(item));
};

export default array_diff;
