// import tableImport from 'table';
const { table, getBorderCharacters } = require('table');

const fillMap = (width, height, apples, player) => {
  const array = new Array(height);
  for (let i = 0; i < height; i++) {
    array[i] = new Array(width);
  }
  return array;
};

const drawMap = (map) => {
  const text = table(map, {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    },
    drawHorizontalLine: () => {
      return false;
    }
  });

  console.log(text);
};

module.exports = {
  fillMap,
  drawMap
};
