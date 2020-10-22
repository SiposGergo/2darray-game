// const fillMap = require('./map').fillMap;
// const valamimás = require('./map').valamimás;
const { fillMap, drawMap } = require('./map');
const { keyIn } = require('readline-sync');
const { random } = require('./random');

const width = 20;
const height = 10;
const numberOfAppels = 5;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

for (let i = 0; i < numberOfAppels; i++) {
  apples.push({
    x: random(1, width - 2),
    y: random(1, height - 2)
  });
}

map = fillMap(width, height, apples, player);
drawMap(map, player.score);

const stdin = process.stdin;
stdin.setRawMode(true); // Ne várjon enterre
stdin.resume(); // Csak process.exit-el lehet kilépni
stdin.setEncoding('utf8'); // Karaktereket kapjunk vissza
stdin.on('data', (key) => {
  if (key === 's' && player.pos.y < height - 2) {
    player.pos.y++;
  } else if (key === 'w' && player.pos.y > 1) {
    player.pos.y--;
  } else if (key === 'a' && player.pos.x > 1) {
    player.pos.x--;
  } else if (key === 'd' && player.pos.x < width - 2) {
    player.pos.x++;
  }
  if (key === 'q') {
    process.exit();
  }
  map = fillMap(width, height, apples, player);
  drawMap(map, player.score);
});
