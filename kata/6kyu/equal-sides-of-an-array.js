const findEvenIndex = (arr) => {
  if (!arr) {
    return -1;
  }

  const iter = ([head, ...rest], index, sumLeft, sumRight) => {
    if (sumLeft === sumRight - head) {
      return index;
    }

    if (rest.length === 0) {
      return -1;
    }

    return iter(rest, index + 1, sumLeft + head, sumRight - head);
  };

  const sumAll = arr.reduce((acc, item) => acc + item, 0);

  return iter(arr, 0, 0, sumAll);
};

export default findEvenIndex;
