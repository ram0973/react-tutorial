import React, {Component, PropsWithChildren} from "react";

interface SquareProps extends PropsWithChildren<any>{
  value: string,
}

interface SquareState {
}

export class Square extends Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
