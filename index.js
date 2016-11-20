const {adjust, map, join, compose, last, prop, until, propSatisfies, lte, concat, update} = require('ramda');
const primeGrid = require('./src/prime/grid.js');

const grid = adjust(update(0, ' '), 0)(primeGrid(process.argv[2] || 3));
const pad = compose(prop('length'), String, last, last)(grid);
const padString = until(propSatisfies(lte(pad), 'length'), concat(' '))('');
const padding = x => (padString + x).slice(-pad);
const layout = compose(join('\n'), map(compose(join(' | '), map(padding))));
process.stdout.write(`${layout(grid)}\n`);
