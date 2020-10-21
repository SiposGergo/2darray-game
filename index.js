// const fillMap = require('./map').fillMap;
// const valamimás = require('./map').valamimás;
const { fillMap, drawMap } = require('./map');
const { keyIn } = require('readline-sync');

const width = 20;
const height = 10;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

let key;
do {
  map = fillMap(width, height, apples, player);
  drawMap(map);

  key = keyIn();
  if (key === 's') {
    player.pos.y++;
  }
} while (key !== 'q');
