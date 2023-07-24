import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}
function Button({ text, onPress }: Props) {
  return (
    <div className="btn btn-primary" onClick={onPress}>
      Button
    </div>
  );
}

export default Button;
