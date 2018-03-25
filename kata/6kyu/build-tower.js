const towerBuilder = (nFloors) => {
  const iter = (tower, space, aster) => {
    if (space === nFloors) {
      return tower;
    }
    const nextFloor = `${' '.repeat(space)}${'*'.repeat(aster)}${' '.repeat(space)}`;
    return iter([nextFloor, ...tower], space + 1, aster - 2);
  };

  return iter([], 0, (2 * nFloors) - 1);
};

export default towerBuilder;
