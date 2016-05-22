import _ from 'lodash';

function full(set) {
  return _.compact(set).length === 9;
}

var ONE_TO_NINE =  _.times(9).map((n) => n + 1);

// has one of each number 1..9
function correctSet(set) {
  console.log('correctSet', set);
  return '' + set == '' + ONE_TO_NINE;
}

function transpose(grid) {
  var result = [];
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      if(!result[j]) {
        result[j] = [];
      }
      result[j][i] = grid[i][j];
    }
  }
  return result;
}

function emptyGrid() {
  return [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ];
}

class Board {
  constructor(grid) {
    this.grid = grid || emptyGrid();
  }

  complete() {
    return _.every(this.rows(), full);
  }

  correct() {
    if(!this.complete()) {
      return false;
    }
    return _.every(this.rows(), correctSet) && _.every(this.cols(), correctSet);
  }

  rows() {
    return _.compact(this.grid);
  }

  cols() {
    return transpose(this.grid);
  }

  squareAt(corner) {
    var [x, y] = corner;
    var result = [];
    for(var i = x; i < 3; i++) {
      for(var j = y; j < 3; j++) {
        result.push(this.grid[i][j]);
      }
    }
    return result;
  }

  set(pos, value) {
    var [x, y] = pos;
    this.grid[x][y] = value;
  }
}

class Nod {
  constructor(board, pos) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.board = board;
  }

  rowVals() {
    return _.compact(this.board.rows()[this.row]);
  }

  colVals() {
    return _.compact(this.board.cols()[this.col]);
  }

  squareVals() {
    // (row / 3) * 3 is the corner
    var rowCorner = parseInt(this.row / 3) * 3;
    var colCorner = parseInt(this.row / 3) * 3;
    return _.compact(this.board.squareAt([rowCorner, colCorner]));
  }
}

// Given an incomplete board, construct nodes with the ability to find the
// values from it's assigned square, row, and column.
class Solve {
  constructor(board) {
    this.board = board;
  }
}

module.exports = {
  correctSet: correctSet,
  transpose: transpose,
  Board: Board,
  Nod: Nod,
};
