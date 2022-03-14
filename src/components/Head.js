import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="@asimonv"
        title={title}
        titleTemplate="%s | @asimonv"
      />
    </>
  );
};

export default Head;
