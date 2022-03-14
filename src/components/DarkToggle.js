import React from "react";

import { ThemeContext } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <>
      {colorMode === "dark" ? (
        <FiSun
          className="inline-block w-6 h-6 stroke-2 d hover:text-blue-600"
          onClick={() => setColorMode("light")}
        />
      ) : (
        <FiMoon
          className="inline-block w-6 h-6 stroke-2 d hover:text-blue-600"
          onClick={() => setColorMode("dark")}
        />
      )}
    </>
  );
};

export default DarkToggle;
