import _ from 'lodash';
import {Board} from '../js/board.js';
import {Nod} from '../js/nod.js';
import {Solve} from '../js/solve.js';

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

describe('Solve', function() {
  it('pass will set known values', function () {
    var board = new Board(COMPLETE_BOARD);
    board.set([0, 0], null);
    board.set([0, 1], null);
    board.set([0, 2], null);
    board.set([1, 0], null);
    board.set([5, 5], null);

    var solve = new Solve(board);
    solve.pass();
    expect(board.get([0, 0])).toEqual(4);
    expect(board.correct()).toBe(true);
  });

  it('pass will set known values', function () {
    var board = new Board(COMPLETE_BOARD);
    board.set([0, 0], null);
    var solve = new Solve(board);
    solve.pass();
    expect(board.get([0, 0])).toEqual(4);
    expect(board.complete()).toBe(true);
    expect(board.correct()).toBe(true);
  });
});
