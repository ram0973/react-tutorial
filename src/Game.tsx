import { Board } from "./Board";
import React from "react";

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board  i={1}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

