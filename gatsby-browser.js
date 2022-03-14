import React from "react";

import App from "./src/components/App";
import "./src/styles/globals.css";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
