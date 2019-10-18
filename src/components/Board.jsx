import React, { Component } from 'react';

class Board extends Component {
  state = {
    pieces: []
  };

  blackKing = (
    <img src={require('../img/black-king.svg')} alt='black-king'></img>
  );
  blackQueen = (
    <img src={require('../img/black-queen.svg')} alt='black-queen'></img>
  );
  blackRook = (
    <img src={require('../img/black-rook.svg')} alt='black-rook'></img>
  );
  blackBishop = (
    <img src={require('../img/black-bishop.svg')} alt='black-bishop'></img>
  );
  blackKnight = (
    <img src={require('../img/black-knight.svg')} alt='black-knight'></img>
  );
  blackPawn = (
    <img src={require('../img/black-pawn.svg')} alt='black-pawn'></img>
  );
  whiteKing = (
    <img src={require('../img/white-king.svg')} alt='white-king'></img>
  );
  whiteQueen = (
    <img src={require('../img/white-queen.svg')} alt='white-queen'></img>
  );
  whiteRook = (
    <img src={require('../img/white-rook.svg')} alt='white-rook'></img>
  );
  whiteBishop = (
    <img src={require('../img/white-bishop.svg')} alt='white-bishop'></img>
  );
  whiteKnight = (
    <img src={require('../img/white-knight.svg')} alt='white-knight'></img>
  );
  whitePawn = (
    <img src={require('../img/white-pawn.svg')} alt='white-pawn'></img>
  );

  piecePlace(id) {
    let piece;
    switch (id) {
      case 57:
      case 64:
        piece = this.whiteRook;
        break;
      case 58:
      case 63:
        piece = this.whiteKnight;
        break;
      case 59:
      case 62:
        piece = this.whiteBishop;
        break;
      case 60:
        piece = this.whiteQueen;
        break;
      case 61:
        piece = this.whiteKing;
        break;
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
        piece = this.whitePawn;
        break;
      case 1:
      case 8:
        piece = this.blackRook;
        break;
      case 2:
      case 7:
        piece = this.blackKnight;
        break;
      case 3:
      case 6:
        piece = this.blackBishop;
        break;
      case 4:
        piece = this.blackQueen;
        break;
      case 5:
        piece = this.blackKing;
        break;
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        piece = this.blackPawn;
        break;
      default:
        piece = null;
    }
    return piece;
  }

  squares = [];
  resetBoard() {
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        if ((i + j) % 2 === 0) {
          this.squares.push(
            <div
              id={(i - 1) * 8 + j}
              key={(i - 1) * 8 + j}
              className='whiteSquare'
              onClick={this.selectSquare}
            >
              {this.piecePlace((i - 1) * 8 + j)}
            </div>
          );
        } else {
          this.squares.push(
            <div
              id={(i - 1) * 8 + j}
              key={(i - 1) * 8 + j}
              className='blackSquare'
              onClick={this.selectSquare}
            >
              {this.piecePlace((i - 1) * 8 + j)}
            </div>
          );
        }
      }
    }
  }

  selectSquare = event => {
    console.log(event.target.id);
  };

  render() {
    this.resetBoard();
    return <div id='main-board'>{this.squares}</div>;
  }
}

export default Board;
