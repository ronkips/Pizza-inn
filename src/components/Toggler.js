import React from "react";
import { Toggle, ToggleButton } from "./Themes";
import { themeContext } from "./Context";


const Toggler = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <Toggle onClick={handleClick}>
   
      <ToggleButton
        style={darkMode ? { left: "2px" } : { rigth: "2px" }}
      ></ToggleButton>
    </Toggle>
  );
};

export default Toggler;
