// const fillMap = require('./map').fillMap;
// const valamimás = require('./map').valamimás;
const { fillMap, drawMap } = require('./map');

const width = 20;
const height = 10;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

map = fillMap(width, height, apples, player);
drawMap(map);
