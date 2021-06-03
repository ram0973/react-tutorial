import React, {Component, ComponentProps} from "react";

interface SquareProps extends ComponentProps<"button"> {
  value: string,
}

export class Square extends Component<SquareProps, {}> {
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
