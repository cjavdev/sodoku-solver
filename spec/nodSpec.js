import _ from 'lodash';
import {Board} from '../js/board.js';
import {Nod} from '../js/nod.js';

describe('Nod', function() {
  it('knows the list of numbers in an empty row', function () {
    var board = new Board();
    var nod = new Nod(board, [0, 0]);
    var rowVals = nod.rowVals();
    expect(rowVals).toEqual([]);
  });

  it('knows the list of numbers in a non-empty row', function () {
    var board = new Board();
    board.set([0, 1], 1);
    board.set([0, 7], 2);
    board.set([0, 8], 9);
    var nod = new Nod(board, [0, 0]);
    var rowVals = nod.rowVals();
    expect(rowVals).toEqual([1, 2, 9]);
  });

  it('knows the list of numbers in a non-empty row', function () {
    var board = new Board();
    board.set([1, 0], 1);
    board.set([7, 0], 2);
    board.set([8, 0], 7);
    var nod = new Nod(board, [0, 0]);
    var vals = nod.colVals();
    expect(vals).toEqual([1, 2, 7]);
  });

  it('knows the list of numbers in a non-empty row', function () {
    var board = new Board();
    board.set([1, 0], 1);
    board.set([0, 1], 2);
    var nod = new Nod(board, [0, 0]);
    var vals = _.orderBy(nod.squareVals());
    expect(vals).toEqual([1, 2]);
  });
});
