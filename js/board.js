import _ from 'lodash';

// has one of each number 1..9
var ONE_TO_NINE =  _.times(9).map((n) => n + 1);

function correctSet(set) {
  return '' + _.orderBy(set) == '' + ONE_TO_NINE;
}

function full(set) {
  return _.compact(set).length === 9;
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

class Board {
  constructor(grid) {
    // make a deep copy of whatever grid was passed in...
    this.grid = _.map(grid || emptyGrid(), _.clone);
  }

  complete() {
    return _.every(this.rows(), full);
  }

  correct() {
    if (!this.complete()) {
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
    for(var i = x; i < x + 3; i++) {
      for(var j = y; j < y + 3; j++) {
        result.push(this.grid[i][j]);
      }
    }
    return result;
  }

  set(pos, value) {
    var [x, y] = pos;
    this.grid[x][y] = value;
  }

  display() {
    _.each(this.grid, function(row) {
      console.log(row);
    });
  }
}

module.exports = {
  correctSet: correctSet,
  transpose: transpose,
  Board: Board
};
