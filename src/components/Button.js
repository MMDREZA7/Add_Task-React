import propTypes from "prop-types";
const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
};

Button.defaultProps = {
  text: "Empty",
  color: "lightblue",
};

export default Button;
