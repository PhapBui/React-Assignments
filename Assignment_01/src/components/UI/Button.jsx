import React from "react";

const Button = ({ style, text, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
