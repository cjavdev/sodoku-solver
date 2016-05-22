import _ from 'lodash';

function oneToNine() {
  return _.times(9).map((n) => n + 1);
}

export class Nod {
  constructor(board, pos) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.board = board;
  }

  knownValue() {
    var candidates = this.candidates();
    if(candidates.length === 1) {
      return candidates[0];
    }
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

  candidates() {
    var possible = oneToNine(),
      rowVals = this.rowVals(),
      colVals = this.colVals(),
      squareVals = this.squareVals();

    return _.chain(possible)
      .filter((p) => { return !_.includes(rowVals, p); })
      .filter((p) => { return !_.includes(colVals, p); })
      .filter((p) => { return !_.includes(squareVals, p); })
      .value();
  }
}

// module.exports = {
//   Nod: Nod
// };
