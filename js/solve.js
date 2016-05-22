import _ from 'lodash';

class Solve {
  constructor(board) {
    this.board = board;
  }

  pass() {
    var nods = this.board.generateNods();
    _.each(nods, (nod) => {
      if(nod.knownValue()) {
        this.board.set(nod.pos, nod.knownValue());
      }
    });
  }
}

module.exports = {
  Solve: Solve
};
