import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate },
    },
  } = useStaticQuery(query);
  return (
    <>
      <Helmet
        defaultTitle={defaultTitle}
        title={title}
        titleTemplate={titleTemplate}
      />
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        twitterUsername
      }
    }
  }
`;

export default Head;
