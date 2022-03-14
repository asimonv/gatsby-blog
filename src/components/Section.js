import React from "react";

const Section = ({ children }) => (
  <section className="p-4 rounded-lg shadow transition-colors bg-gray-900">
    {children}
  </section>
);

export default Section;
