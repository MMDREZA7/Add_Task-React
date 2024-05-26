import propTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ btnTitle, onAdd, showAdd }) => {
  const location = useLocation();
  //   const title = props.title;
  // const addHandler = () => {
  //   console.log("Added ✔");
  // };
  // const removeHandler = () => {
  //   console.log("Removed ✔");
  // };
  // const resetHandler = () => {
  //   console.log("reset ✔");
  // };

  return (
    <header className="header">
      <h1>Task Tracker</h1>

      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : btnTitle}
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
        />
      )}

      {/* <Button text="REMOVE" color="red" onClick={removeHandler} /> */}
      {/* <Button text="RESET" color="#666" onClick={resetHandler} /> */}
    </header>
  );
};

Header.propTypes = {
  btnTitle: propTypes.string.isRequired,
};

export default Header;
