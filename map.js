// import tableImport from 'table';
const { table } = require('table');

const fillMap = (width, height, apples, player) => {
  const array = new Array(height);
  for (let i = 0; i < height; i++) {
    array[i] = new Array(width);
  }
  return array;
};

const drawMap = (map) => {
  const text = table(map);
  console.log(text);
};

module.exports = {
  fillMap,
  drawMap
};
