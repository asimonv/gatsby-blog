import React from "react";

const ExternalLink = ({ children, ...props }) => {
  return (
    <a
      className="text-blue-600 text-blue-400 font-medium hover:bg-opacity-25 hover:bg-blue-500"
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
