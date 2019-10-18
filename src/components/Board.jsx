import React, { Component } from 'react';

class Board extends Component {
  state = {
    pieces: []
  };

  blackKing = (
    <img src={require('../img/black-king.png')} alt='black-king'></img>
  );
  squares = [];
  createSquares() {
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        if ((i + j) % 2 === 0) {
          this.squares.push(
            <div
              id={(i - 1) * 8 + j}
              key={(i - 1) * 8 + j}
              className='whiteSquare'
              onClick={this.selectSquare}
            ></div>
          );
        } else {
          this.squares.push(
            <div
              id={(i - 1) * 8 + j}
              key={(i - 1) * 8 + j}
              className='blackSquare'
              onClick={this.selectSquare}
            ></div>
          );
        }
      }
    }
  }

  selectSquare = event => {
    console.log(event.target.id);
  };

  render() {
    this.createSquares();
    return <div id='main-board'>{this.squares}</div>;
  }
}

export default Board;
