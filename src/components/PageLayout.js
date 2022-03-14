/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { preToCodeBlock } from 'mdx-utils';

import Header from "./Header";
import { MDXProvider } from "@mdx-js/react";
import { StaticCodeSnippet } from "./StaticCodeSnippet";
import ComponentId23 from "./ComponentId23";
import ExternalLink from "./ExternalLink";
import { Button } from "./Button";

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const components = {
    StaticCodeSnippet,
    Button,
    ComponentId23,
    ExternalLink,
    pre: props => {
      const preProps = preToCodeBlock(props);
      if (preProps) {
        return <StaticCodeSnippet {...preProps} />;
      } else {
        return <pre {...props} />;
      }
    },
  };

  return (
    <MDXProvider components={components}>
      <div className="grow flex flex-col pt-4 pb-8 space-y-4">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col">{children}</div>
      </div>
    </MDXProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
