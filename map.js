// import tableImport from 'table';
const { table, getBorderCharacters } = require('table');

const fillMap = (width, height, apples, player) => {
  const array = new Array(height);
  for (let i = 0; i < height; i++) {
    array[i] = new Array(width);
    for (let j = 0; j < width; j++) {
      if (player.pos.x === j && player.pos.y === i) {
        array[i][j] = '🙂';
      }
    }
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
  console.clear();
  console.log(text);
};

module.exports = {
  fillMap,
  drawMap
};
