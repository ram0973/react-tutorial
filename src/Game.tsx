import { Board } from "./Board";
import React, {Component} from "react";

interface GameState {
  history: [{ squares: Array<string>}],
}

export class Game extends Component<{}, GameState> {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
