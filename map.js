const fillMap = (width, height, apples, player) => {
  const array = new Array(width);
  for (let i = 0; i < width; i++) {
    array[i] = new Array(height);
  }
  return array;
};

module.exports = {
  fillMap
};
