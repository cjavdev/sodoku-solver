import _ from 'lodash';

export class Nod {
  constructor(board, pos) {
    this.pos = pos;
    this.row = pos[0];
    this.col = pos[1];
    this.board = board;
  }

  // Possible values for the current node.
  candidates() {
    return _.chain(_oneToNine())
      .filter((p) => { return !_.includes(this.rowVals(), p); })
      .filter((p) => { return !_.includes(this.colVals(), p); })
      .filter((p) => { return !_.includes(this.squareVals(), p); })
      .value();
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
    return _.compact(this.board.squareAt(this.squareCorner()));
  }

  squareCorner() {
    // Top left corner of the subsquare this square belongs to.
    return [
      parseInt(this.row / 3) * 3,
      parseInt(this.col / 3) * 3
    ];
  }
}

function _oneToNine() {
  return _.times(9).map((n) => n + 1);
}

