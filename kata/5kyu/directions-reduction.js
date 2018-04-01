const dirReduc = (directions) => {
  const opposed = {
    SOUTH: 'NORTH',
    NORTH: 'SOUTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  return directions.reduce((result, dir) => {
    const last = result[result.length - 1];
    return opposed[dir] === last ? result.slice(0, result.length - 1) : [...result, dir];
  }, []);
};

export default dirReduc;
