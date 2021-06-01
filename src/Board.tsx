import React from "react";
import { Square } from "./Square";

type BoardProps = {
  i : number
}

type BoardState = {
  status: string
}

export class Board extends React.Component<BoardProps, BoardState> {
  state: BoardState = { status: 'Next player: X'};

  renderSquare(i: number) {
    return (
      <Square value={ i.toString() }/>
    );
  }

  render() {
    return (
      <div>
        <div className="status">{ this.state.status }</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
