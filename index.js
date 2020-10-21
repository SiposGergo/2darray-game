// const fillMap = require('./map').fillMap;
// const valamimás = require('./map').valamimás;
const { fillMap } = require('./map');

const width = 30;
const height = 20;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

map = fillMap(width, height, apples, player);
