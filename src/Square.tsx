import React, {ComponentProps} from "react";

interface SquareProps extends ComponentProps<"button"> {
  value: string,
}

export function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
