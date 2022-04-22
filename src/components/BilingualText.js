import React, { useState } from "react";

const BilingualText = ({ original, translation }) => {
  const [currentText, setCurrentText] = useState(original);
  const toggleText = () => {
    setCurrentText(prev => (prev === original ? translation : original));
  };
  return <button onClick={toggleText}>{currentText}</button>;
};

export default BilingualText;
