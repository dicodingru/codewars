const binaryArrayToNumber = (array) => {
  const str = array.join('');
  return parseInt(str, 2);
};

export default binaryArrayToNumber;
