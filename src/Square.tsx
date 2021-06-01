import React from "react";

type SquareProps = {
  value: string
}

export class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square" onClick={() => {
        alert('click');
      }}>
        {this.props.value}
      </button>
    );
  }
}
