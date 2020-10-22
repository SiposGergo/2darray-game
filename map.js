// import tableImport from 'table';
const { table, getBorderCharacters } = require('table');

const findIndexOfApple = (apples, i, j) => {
  for (let k = 0; k < apples.length; k++) {
    if (apples[k].x === j && apples[k].y === i) {
      return k;
    }
  }
};

const fillMap = (width, height, apples, player) => {
  const array = new Array(height);
  for (let i = 0; i < height; i++) {
    array[i] = new Array(width);
    for (let j = 0; j < width; j++) {
      let indexOfApple = findIndexOfApple(apples, i, j);
      if (i === 0 || j === 0 || i === height - 1 || j === width - 1) {
        array[i][j] = '██';
      } else if (player.pos.x === j && player.pos.y === i) {
        array[i][j] = '🙂';
        if (indexOfApple !== undefined) {
          apples.splice(indexOfApple, 1);
          player.score++;
          indexOfApple = undefined;
        }
      }
      if (indexOfApple !== undefined) {
        array[i][j] = '🍎';
      }
    }
  }
  return array;
};

const drawMap = (map, score) => {
  const text = table(map, {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 0
    },
    drawHorizontalLine: () => {
      return false;
    }
  });
  console.clear();
  console.log('score:', score);
  console.log(text);
};

module.exports = {
  fillMap,
  drawMap
};
