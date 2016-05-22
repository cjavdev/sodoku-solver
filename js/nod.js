import _ from 'lodash';

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

module.exports = {
  Nod: Nod
};
