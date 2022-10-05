import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, size = "md", color = "blue", onClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.25;
  const style = {
    backgroundColor: color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color: "white",
  };

  return (
    <button type="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
