const findEvenIndex = (arr) => {
  if (!arr) {
    return -1;
  }

  const iter = ([head, ...rest], index, sumLeft, sumRight) => {
    const newSumRight = sumRight - head;
    if (sumLeft === newSumRight) {
      return index;
    }

    if (rest.length === 0) {
      return -1;
    }

    return iter(rest, index + 1, sumLeft + head, newSumRight);
  };

  const sum = arr.reduce((acc, item) => acc + item, 0);

  return iter(arr, 0, 0, sum);
};

export default findEvenIndex;
