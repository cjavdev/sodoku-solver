import {Board} from './js/board.js';
import {Solve} from './js/solve.js';

var COMPLETE_BOARD = [
  [4, 8, 3, 9, 2, 1, 6, 5, 7],
  [9, 6, 7, 3, 4, 5, 8, 2, 1],
  [2, 5, 1, 8, 7, 6, 4, 9, 3],
  [5, 4, 8, 1, 3, 2, 9, 7, 6],
  [7, 2, 9, 5, 6, 4, 1, 3, 8],
  [1, 3, 6, 7, 9, 8, 2, 4, 5],
  [3, 7, 2, 6, 8, 9, 5, 1, 4],
  [8, 1, 4, 2, 5, 3, 7, 6, 9],
  [6, 9, 5, 4, 1, 7, 3, 8, 2]
];

var board = new Board(COMPLETE_BOARD);
console.log('Starting board:');
board.display();
console.log('\n');
if(board.correct()) {
  console.log('Board is correct');
}

var COMPLETE_BOARD = [
  [null, null, null, 9, 2, 1, 6, 5, 7],
  [9, 6, 7, 3, 4, 5, 8, 2, 1],
  [2, 5, 1, 8, 7, 6, 4, null, 3],
  [5, null, 8, null, 3, 2, 9, 7, 6],
  [7, 2, 9, 5, null, 4, 1, null, 8],
  [1, 3, null, 7, 9, 8, 2, 4, 5],
  [3, null, 2, 6, 8, 9, 5, 1, 4],
  [8, 1, 4, 2, null, null, null, 6, 9],
  [6, 9, 5, 4, 1, 7, 3, 8, 2]
];

var board = new Board(COMPLETE_BOARD);
console.log('Starting board:');
board.display();
console.log('\n');
if(board.correct()) {
  console.log('Board is correct');
}

var solve = new Solve(board);
solve.pass();
console.log('after pass 1...');
board.display();
solve.pass();
console.log('after pass 2...');
board.display();
solve.pass();
console.log('after pass 3...');
board.display();
solve.pass();
console.log('after pass 4...');
board.display();
