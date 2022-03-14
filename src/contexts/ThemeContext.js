import React from "react";

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);
  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};