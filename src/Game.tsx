import { Board } from "./Board";
import React, {Component, PropsWithChildren} from "react";

interface GameProps extends PropsWithChildren<any> {

}

interface GameState {
  history: [{ squares: Array<string>}],
  xIsNext: boolean,
}

export class Game extends Component<GameProps, GameState> {
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
